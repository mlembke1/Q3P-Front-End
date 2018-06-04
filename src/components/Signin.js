import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Image
} from 'react-native'
import { Card, Button, FormLabel, FormInput } from "react-native-elements"
import { onSignIn } from "./Auth"

export default ({ navigation }) => (
  <View style={{paddingVertical: 150}}>
    <Card>
      <FormInput style={styles.username} placeholder="Email address" />
      <FormInput secureTextEntry placeholder="Password" />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"))
        }}
      />
    </Card>
  </View>
)

const styles = StyleSheet.create({
  // LOGIN SCREEN STYLES
  username: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
})
