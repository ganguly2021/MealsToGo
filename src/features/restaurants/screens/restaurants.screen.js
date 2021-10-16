import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Searchbar
} from 'react-native-paper'

import { RestaurantInfoCard } from '../components/restaurant-info-card';

function RestaurantsScreen() {
  const [txtSearch, setTxtSearch] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => setTxtSearch(text)}
          value={txtSearch}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    padding: 16
  },
  list: {
    padding: 16,
    flex: 1
  }

});


export default RestaurantsScreen