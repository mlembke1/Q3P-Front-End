import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Image,
  ImageBackground
} from 'react-native'
import { Card, Button, FormLabel, FormInput } from "react-native-elements"
import t from 'tcomb-form-native'
import { onSignIn } from "./Auth"
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password: t.String,
  terms: t.Boolean
})

var options = {
  auto: 'placeholders',
  fields: {
    username: {
      error: 'Insert a valid username'
    },
    password: {
      error: 'Insert a valid password'
    },
    terms: {
      label: 'Remember Me'
    }
  }
}

handleLoginSubmit = () => {
  const something = this._form.getValue()
  const value = this._form.refs.input.refs.username.props.value

  const currentUsers =
  axios.get(`${REACT_APP_API_URL}/getAllUsers`)
  .then(r => r)
  .catch(err => err)

  if (something !== null && currentUsers.includes(something.username)) {
    const objectToPost = {
      username: something.username,
      password: something.password
    }
    this.loginUser(objectToPost)
    return true
  } else {
    return false
  }
}

loginUser = (userToLogin) => {
  axios.get(`${REACT_APP_API_URL}/login`, userToLogin)
  .then(r => r)
  .catch(err => err)
}

export default ({ navigation }) => (
<<<<<<< HEAD
  <ImageBackground
    source={require('../../assets/background-image.jpg')}
    style={styles.backgroundImage} >
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Form
            ref={c => this._form = c}
            type={User}
            options={options}
            />
          <Button
            style={styles.loginBtn}
            title="LOGIN"
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            onPress={() => { if (this.handleSubmit()) {
              onSignIn().then(() => navigation.navigate("SignedIn"))
=======
  <ScrollView>
    <View style={{paddingVertical: 150}}>
      <Card>
        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
          />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="SIGN IN"
          onPress={() => { if ( this.handleLoginSubmit() ) {
            onSignIn().then(() => navigation.navigate("SignedIn"))
>>>>>>> added get request for login and signup
            }
          }}
          />
        </Card>
      </View>
    </ScrollView>
  </ImageBackground>
  )

const styles = StyleSheet.create({
  container: {
    width: 350,
    marginTop: 120,
  },
  loginBtn: {
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
