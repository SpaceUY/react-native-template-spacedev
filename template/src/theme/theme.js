import { DefaultTheme } from '@react-navigation/native';

export default {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#D8FD01',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#464C51',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
      background: '#000000',
      gradientStart: '#222328',
      gradientFinish: '#0f0f12',
      white: '#FFFFFF',
      gray: {
        100: '#2C2C2F',
        200: '#24252A',
        300: '#74797C',
        400: '#535353',
        500: '#181F25',
        600: '#12171C',
      },
    },
  },
  dark: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#D8FD01',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#464C51',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
      background: '#181F25',
      gradientStart: '#222328',
      gradientFinish: '#0f0f12',
      white: '#FFFFFF',
      gray: {
        100: '#2C2C2F',
        200: '#24252A',
        300: '#74797C',
        400: '#535353',
        500: '#181F25',
        600: '#12171C',
      },
    },
  },
};
