import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import logo from '_assets/spacedev.png';
import localizedStrings from '_localization';
import useStyles, { createStyleFactory } from '_hooks/useStyles';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

const Counter = () => {
  const navigation = useNavigation();
  const styles = useStyles(makeStyles);
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.self}
      keyboardDismissMode="on-drag">
      <View style={styles.row}>
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.textbox}
          value={incrementAmount}
          onChangeText={setIncrementAmount}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(incrementValue))}>
          <Text style={styles.buttonText}>{localizedStrings.addAmount}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementAsync(incrementValue))}>
          <Text style={styles.buttonText}>{localizedStrings.addAsync}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementIfOdd(incrementValue))}>
          <Text style={styles.buttonText}>{localizedStrings.addIfOdd}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FileUpload')}>
          <Text style={styles.buttonText}>Upload some random file</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const makeStyles = createStyleFactory(({ colors }, safeAreaInsets) =>
  StyleSheet.create({
    self: {
      paddingBottom: safeAreaInsets.bottom,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: safeAreaInsets.top,
    },
    logo: {
      width: '90%',
      resizeMode: 'contain',
    },
    button: {
      marginBottom: 8,
      padding: 16,
      backgroundColor: colors.secondary,
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
    buttonText: {
      color: colors.text,
      fontFamily: 'Courier New',
      fontSize: 16,
      fontWeight: '800',
    },
    value: {
      fontSize: 78,
      paddingHorizontal: 16,
      marginTop: 2,
      fontFamily: 'Courier New',
      color: colors.text,
    },
    textbox: {
      fontSize: 32,
      padding: 8,
      width: '90%',
      textAlign: 'center',
      marginHorizontal: 8,
      marginVertical: 16,
      borderRadius: 8,
      backgroundColor: colors.secondary,
      color: colors.text,
      fontFamily: 'Courier New',
    },
  }),
);

export default Counter;
