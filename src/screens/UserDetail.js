import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Tile, ListItem } from "react-native-elements";
import Colors from "../constants/Colors";

class UserDetail extends Component {
  render() {
    // get user detail information from navigation state instead of hardcoded object
    const { picture, name, email, phone, login, dob, location } = {
      name: {
        title: "mr",
        first: "lance",
        last: "thomas"
      },
      location: {
        street: "6942 first street",
        city: "elk grove",
        state: "new hampshire",
        postcode: 30411
      },
      email: "lance.thomas@example.com",
      login: {
        username: "organicmouse687",
        password: "frodo1",
        salt: "0cSpyp70",
        md5: "bf758d9c79ef3c8a2c3fd900fb0c3148",
        sha1: "4f28fcd2d5e5ae5e0ff55b7528841e350cabf9fb",
        sha256:
          "1d44ef3ad01dafe929c56021498d8a6d89b2c438bd3f6a07de777ed35b98b5e1"
      },
      dob: "1969-12-14 07:28:16",
      phone: "(589)-070-0928",
      picture: {
        large: "https://randomuser.me/api/portraits/men/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg"
      }
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
