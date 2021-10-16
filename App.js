import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RestaurantsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
