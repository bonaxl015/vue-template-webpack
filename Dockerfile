# Stage 1: Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

ENV CYPRESS_INSTALL_BINARY=0

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig.json webpack.config.js ./
COPY configs ./configs
COPY public ./public
COPY src ./src

RUN yarn build

# Stage 2: Production Stage
FROM nginx:1.28.0-alpine3.21-slim

RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /run && \
    chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /run /usr/share/nginx/html && \
    chmod -R 755 /var/cache/nginx /var/run /var/log/nginx /run /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app with appropriate permissions
COPY --from=builder /app/dist /usr/share/nginx/html

USER nginx

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
