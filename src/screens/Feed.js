import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { users } from "../config/data";

class Feed extends Component {
  static navigationOptions = {
    title: "Feed",
    headerTitleStyle: { flex: 1 }
  };

  onLearnMore = user => {
    this.props.navigation.navigate("Details", { user: user });
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
            onPress={() => this.onLearnMore(user)}
            bottomDivider
            chevron
          />
        ))}
      </ScrollView>
    );
  }
}

export default Feed;
