import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlacesDetailScreen = (props) => {
  return (
    <View>
      <Text>Places detail screen</Text>
    </View>
  );
};

PlacesDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placesTitle"),
  };
};

const styles = StyleSheet.create({});

export default PlacesDetailScreen;
