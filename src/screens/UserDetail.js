import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Tile, ListItem } from "react-native-elements";
import Colors from "../constants/Colors";

class UserDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation
      .getParam("user")
      .name.first.toUpperCase()} ${navigation
      .getParam("user")
      .name.last.toUpperCase()}`
  });

  render() {
    const { picture, name, email, phone, login, dob, location } = {
      ...this.props.navigation.getParam("user")
    };

    const { title, subtitle } = styles;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <View>
          <ListItem
            title="Email: "
            subtitle={email}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
            topDivider
          />
          <ListItem
            title="Phone: "
            subtitle={phone}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="Username: "
            subtitle={login.username}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="Birthday: "
            subtitle={dob}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="City: "
            subtitle={location.city}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 10,
    color: Colors.subTitle
  },
  title: {
    fontWeight: "bold"
  }
});

export default UserDetail;
