/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

/**
 * Run some login when component is mounted
 * @param {() => (() => void) | void} effect
 */
const useOnMount = (effect) => {
  useEffect(effect, []);
};

export default useOnMount;
