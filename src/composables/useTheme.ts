import { ThemeInstance, useTheme } from 'vuetify';

export type ThemeSwitcherData = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function useThemeSwitcher() {
  const theme: ThemeInstance = useTheme();

  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
