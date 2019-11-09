import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";

class Settings extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#F2F2F2", marginTop: 50 }}>
        <ListItem title="Notifications" bottomDivider chevron />
        <ListItem title="Profile" bottomDivider chevron />
        <ListItem title="Password" bottomDivider chevron />
        <ListItem
          title="Sign Out"
          rightIcon={{ name: "cancel" }}
          style={{ marginTop: 30 }}
        />
      </View>
    );
  }
}

export default Settings;
