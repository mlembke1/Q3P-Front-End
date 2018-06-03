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
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.image}>
        <View style={styles.statusContainer}>
          <MyStatusBar backgroundColor="#79B45D" barStyle="light-content" />
          <View style={styles.appBar}>
            <Icon name="dots-three-horizontal" />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>
            My Dashboard
          </Text>
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
          <View style={styles.buttonContainer} />
          <Button
            onPress={this.props.onLogoutPress}
            title="Logout"
           />
        </ScrollView>
      </ImageBackground>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    width: (width / 2) - 40,
    height: (width / 2) - 40,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white'
  },
  cardTitle: {
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 10
  },
  buttonContainer: {
    margin: 20
  },
  statusBar: {
    height: 20,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: 40,
  }
})


AppRegistry.registerComponent('Dashboard', () => Dashboard);
