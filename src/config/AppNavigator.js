import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "../screens/Feed";
import Me from "../screens/Me";
import Settings from "../screens/Settings";
import UserDetail from "../screens/UserDetail";
import TabBarIcon from "../components/TabBarIcon";

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed
  },
  Details: {
    screen: UserDetail
  }
});

const TabNavigator = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
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

export const RootNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator
    },
    Settings: {
      screen: Settings
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
