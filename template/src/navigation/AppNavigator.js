import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Counter from '_features/counter/Counter';
import FileUpload from '_features/file-upload/FileUpload';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={Counter} />
    <Stack.Screen name="FileUpload" component={FileUpload} />
  </Stack.Navigator>
);

export default AppNavigator;
