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
  static navigationOptions = {
    title: 'My Dashboard',
    headerLeft: (
      <View>
        <Icon name="bars" color="white" size={28} style={{paddingLeft: 20}} />
      </View>
    ),
    headerRight: (
      <View>
        <Icon name="gear" color="white" size={28} style={{paddingRight: 20}} />
      </View>
    ),
    headerStyle: {
      backgroundColor: '#79B45D',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20
    }
  }
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
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  }
})

AppRegistry.registerComponent('Dashboard', () => Dashboard);
