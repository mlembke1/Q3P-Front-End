import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  StatusBar
} from 'react-native'
import { Button, Card } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsModal from './SettingsModal'
import { onSignOut } from "./Auth"

export default ({ navigation }) => (
// export default class Dashboard extends Component {
  // static navigationOptions = {
  //   title: 'My Dashboard',
  //   headerLeft: (
  //     <View>
  //       <Icon name="bars" color="white" size={28} style={{paddingLeft: 20}} />
  //     </View>
  //   ),
  //   headerRight: (
  //     <View>
  //       <Icon name="gear" color="white" size={28} style={{paddingRight: 20}} />
  //     </View>
  //   ),
  //   headerStyle: {
  //     backgroundColor: '#79B45D',
  //   },
  //   headerTitleStyle: {
  //     color: 'white',
  //     fontSize: 20
  //   }
  // }
  // render() {
  //   return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              VIEW DECKS
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              CREATE NEW DECK
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              SOCIAL
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              OTHER
            </Text>
          </View>
          <Button
            backgroundColor="#03A9F4"
            title="LOGOUT"
            onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
          />
        </ScrollView>
      </View>
    )
//   }
// }

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    width: (width / 2) - 20,
    height: (width / 2) - 20,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  cardTitle: {
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT'
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  }
})

AppRegistry.registerComponent('Dashboard', () => Dashboard);
