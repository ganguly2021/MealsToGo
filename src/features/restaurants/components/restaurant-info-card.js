import React from 'react'
import {
  StyleSheet
} from 'react-native'

import {
  Text,
  Card
} from 'react-native-paper'

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photo = [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    ],
    address = "100 Some Place.",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false
  } = restaurant

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photo[0] }} style={styles.cover} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white'
  },
  cover: {
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    padding: 16
  }
})
