import { Theme } from '@react-navigation/native';

type SafeAreaInsets = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

type StyleFactory<T> = (theme: Theme, safeAreaInsets: SafeAreaInsets) => T;

declare const useStyles: <T>(styleFactory: StyleFactory<T>) => T;
declare const createStyleFactory: <T>(styleFactory: StyleFactory<T>) => StyleFactory<T>;

export { createStyleFactory };
export default useStyles;
