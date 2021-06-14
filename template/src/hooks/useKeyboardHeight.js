import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardHeight = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const keyboardWillShowSubscription = Keyboard.addListener(
      'keyboardWillShow',
      (e) => {
        if (Platform.OS === 'ios') {
          setHeight(e.endCoordinates.height);
        }
      },
    );
    const keyboardWillHideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        if (Platform.OS === 'ios') {
          setHeight(0);
        }
      },
    );

    return () => {
      Keyboard.removeSubscription(keyboardWillShowSubscription);
      Keyboard.removeSubscription(keyboardWillHideSubscription);
    };
  }, []);

  return height;
};

export default useKeyboardHeight;
