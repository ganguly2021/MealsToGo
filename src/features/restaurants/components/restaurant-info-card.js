import React from 'react'
import styled from 'styled-components/native'
import {
  Text,
  Card
} from 'react-native-paper'

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photo[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  )
}
