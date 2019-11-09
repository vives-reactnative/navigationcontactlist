import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Tile, ListItem, Button } from "react-native-elements";
import { me } from "../config/data";
import Colors from "../constants/Colors";

class Me extends Component {
  static defaultProps = { ...me };

  handleSettingsPress = () => {
    console.log("handleSettingsPress");
  };

  render() {
    const { title, subtitle } = styles;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button
          title="Settings"
          buttonStyle={{ margin: 20 }}
          onPress={this.handleSettingsPress}
        />

        <View>
          <ListItem
            title="Email: "
            subtitle={this.props.email}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
            topDivider
          />
          <ListItem
            title="Phone: "
            subtitle={this.props.phone}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="Username: "
            subtitle={this.props.login.username}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="Birthday: "
            subtitle={this.props.dob}
            titleStyle={title}
            subtitleStyle={subtitle}
            bottomDivider
          />
          <ListItem
            title="City: "
            subtitle={this.props.location.city}
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

export default Me;
