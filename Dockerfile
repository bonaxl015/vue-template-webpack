# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn config set cache-folder /usr/local/share/.cache/yarn
RUN yarn install --frozen-lockfile

# Copy necessary file for build
COPY tsconfig.json ./
COPY public ./public
COPY src ./src/
RUN find ./src -name "*.test.ts" -o -name "*.test.tsx" -type f -delete

# Build the application
RUN yarn build

# Stage 2: Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
