import React, { useState } from 'react';
import styled from 'styled-components/native'
import {
  View
} from 'react-native';

import {
  Searchbar
} from 'react-native-paper'

import { RestaurantInfoCard } from '../components/restaurant-info-card';

const Container = styled(View)`
  flex: 1;
`


const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  padding: 16px;
  flex: 1;
`;

function RestaurantsScreen() {
  const [txtSearch, setTxtSearch] = useState('')

  return (
    <Container>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => setTxtSearch(text)}
          value={txtSearch}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </Container>
  )
}

export default RestaurantsScreen