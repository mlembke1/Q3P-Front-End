import React from "react"
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
  ImageBackground,
  TouchableHighlight,
  StatusBar
} from 'react-native'
import { Card, Button } from "react-native-elements"
import { onSignOut } from "./Auth"

export default ({ navigation }) => (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.profile}>
          <Text style={styles.username}>John Doe</Text>
          <View
            style={styles.imagePlaceholder}>
            <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            style={styles.problemBtn}
            title="Report a Problem" />
          <Button
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            style={styles.rateBtn}
            title="Rate on App Store" />
          <Button
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            style={styles.logoutBtn}
            title="Logout"
            onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))} />
          </View>
          <Text style={{ marginTop: 60 }}>
            Version 1.0.0
          </Text>
      </ScrollView>
  )

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
  profile: {
    width: width-30,
    height: width/2,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
  },
  imagePlaceholder: {
    backgroundColor: "#bcbec1",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 20
  },
  username: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  },
  buttonContainer: {
    width: width-30,
    height: width/2,
    marginBottom: 50
  },
  problemBtn: {
    margin: 15,
    marginTop: 40,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  },
  rateBtn: {
    margin: 15,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  },
  logoutBtn: {
    margin: 15,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  }
})
