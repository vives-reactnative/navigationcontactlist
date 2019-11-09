import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Feed from "../screens/Feed";
import Me from "../screens/Me";
import TabBarIcon from "../components/TabBarIcon";

export const TabNavigator = createBottomTabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: "Overzicht",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-list" : "md-list"}
        />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: "Mijn profiel",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-person" : "md-person"}
        />
      )
    }
  }
});
