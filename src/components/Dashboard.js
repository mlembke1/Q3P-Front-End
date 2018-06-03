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
  ImageBackground,
  StatusBar
} from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)


export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.statusContainer}>
          <MyStatusBar backgroundColor="#79B45D" barStyle="light-content" />
          <View style={styles.appBar}>
            {/* <Icon name="dots-three-horizontal" /> */}
            <Text style={styles.text}>
              My Dashboard
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              View Decks
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              View Decks
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              View Decks
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              View Decks
            </Text>
          </View>
          <Button
            onPress={this.props.onLogoutPress}
            title="Logout"
           />
        </ScrollView>
      </View>
    )
  }
}

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
    textAlign: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  },
  buttonContainer: {
    margin: 20
  },
  statusBar: {
    height: 20,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: 50,
    justifyContent: 'center'
  }
})


AppRegistry.registerComponent('Dashboard', () => Dashboard);
