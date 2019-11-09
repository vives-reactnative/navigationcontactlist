import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { users } from "../config/data";

class Feed extends Component {
  // add user as parameter of this function
  onLearnMore = () => {
    console.log("onLearnMore");
  };

  render() {
    return (
      <ScrollView>
        {users.map(user => (
          <ListItem
            key={user.login.username}
            leftAvatar={{ source: { uri: user.picture.thumbnail } }}
            title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
            subtitle={user.email}
            onPress={() => this.onLearnMore()}
            bottomDivider
            chevron
          />
        ))}
      </ScrollView>
    );
  }
}

export default Feed;
