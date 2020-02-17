import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";

import { GestureHandler } from "expo";
import { ListItem, Avatar } from "react-native-elements";

import { FlatList, RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

//  To toggle LTR/RTL uncomment the next line
// I18nManager.allowRTL(true);

import AppleStyleSwipeableRow from "./AppleStyleSwipeableRow";
import GmailStyleSwipeableRow from "./GmailStyleSwipeableRow";
import Swipeable from "react-native-gesture-handler/Swipeable";

const Row = ({ item }) => (
  <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
    <View style={styles.avatarView}>
      <Text style={styles.fromText}>{item.from}</Text>
      <Avatar
        size="medium"
        rounded
        activeOpacity={0.7}
        //icon={{name: 'user', type: 'font-awesome'}}
        source={item.avatar}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    </View>

    <Text numberOfLines={2} style={styles.messageText}>
      {item.message}
    </Text>
    <Text style={styles.dateText}>{"❭"}</Text>
  </RectButton>
);
const SwipeableRow = ({ item, index }) => {
  return (
    <AppleStyleSwipeableRow>
      <Row item={item} />
    </AppleStyleSwipeableRow>
  );

  /*<Swipeable>
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </*/
};

export default class Example extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={DATA}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item, index }) => (
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor={(item, index) => `message ${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    paddingVertical: "25%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#2C2F33"
  },
  avatarView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    //flexWrap: 'wrap'
  },
  separator: {
    backgroundColor: "#99AAB5",
    height: StyleSheet.hairlineWidth
  },
  fromText: {
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "#f99e23",
    marginTop: 20
  },
  messageText: {
    color: "#999",
    backgroundColor: "transparent"
  },
  dateText: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    top: 10,
    color: "#f99e23", //'#7289DA',
    fontWeight: "bold"
  }
});

const DATA = [
  {
    from: "Fadoua Meddallel",
    avatar: require("../assets/images/avatars/fadouaAvatar.jpg"),
    when: "3:11 PM",
    message:
      "Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque"
  },
  {
    from: "Youssef Bouafif",
    avatar: require("../assets/images/avatars/youssefAvatar.jpg"),
    when: "11:46 AM",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo."
  },
  {
    from: "Abdessalem abid",
    avatar: require("../assets/images/avatars/abdessalemAvatar.jpg"),
    when: "6:06 AM",
    message:
      "Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis."
  } /*,
  {
    from: 'Porthos',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
  {
    from: 'Domestos',
    when: '2 days ago',
    message:
      'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 days ago',
    message:
      'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
  },
  {
    from: "D'Artagnan",
    when: 'Week ago',
    message:
      'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 weeks ago',
    message:
      'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
  },*/
];
