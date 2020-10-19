import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlacesDetailScreen from "../screens/PlacesDetailScreen";
import NewPlacesScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../contants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlacesDetail: PlacesDetailScreen,
    NewPlace: NewPlacesScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
