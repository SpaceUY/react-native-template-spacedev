import { NavigationContainer, useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, useColorScheme, StatusBar } from 'react-native';
// import Analytics from 'appcenter-analytics';

import AppNavigator from './AppNavigator';
import { theme } from '_theme';

const RootNavigator = () => {
  const scheme = useColorScheme() || 'light';
  const { colors } = useTheme();

  // Analytics.trackEvent(`NAVIGATION CONTAINER WITH ${loggedIn}`);
  return (
    <NavigationContainer
      theme={theme[scheme]}
      fallback={() => {
        // Analytics.trackEvent('Loading Fallback');
        return <Text>Loading...</Text>;
      }}>
      <AppNavigator />
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.gradientStart}
      />
    </NavigationContainer>
  );
};

export default RootNavigator;
