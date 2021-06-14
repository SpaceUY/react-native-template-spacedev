import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useStyles = (styleFactory) => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  return useMemo(
    () => styleFactory(theme, safeAreaInsets),
    [styleFactory, theme, safeAreaInsets],
  );
};

export const createStyleFactory = (styleFactory) => styleFactory;

export default useStyles;
