import React from 'react';
import styled from 'styled-components/native'
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}px;
`;

export default function App() {
  return (
    <SafeArea>
      <RestaurantsScreen />
    </SafeArea>
  );
}
