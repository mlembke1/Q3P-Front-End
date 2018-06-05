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
import { Card, Button, FormValidationMessage } from "react-native-elements"
import t from 'tcomb-form-native'
import { onSignIn } from "./Auth"
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email)
})

const User = t.struct({
  email: Email,
  username: t.String,
  password: t.String,
  password: t.String
})

var options = {
  auto: 'placeholders',
  fields: {
    email: {
      error: 'Insert a valid email'
    },
    username: {
      error: 'Insert a valid username'
    },
    password: {
      error: 'Insert a valid password'
    }
  }
}

handleSignupSubmit = () => {
  const something = this._form.getValue()
  const value = this._form.refs.input.refs.email.props.value

  const currentUsers =
  axios.get(`${REACT_APP_API_URL}/getAllUsers`)
  .then(r => r)
  .catch(err => err)

  if (something !== null && !currentUsers.includes(something.username)) {
    const objectToPost = {
      username: something.username,
      email: something.email,
      password: something.password
    }
    this.postUser(objectToPost)
    return true
  } else {
    return false
  }
}

postUser = (newUserObject) => {
  axios.post(`${REACT_APP_API_URL}/signup`, newUserObject)
  .then(r => r)
  .catch(err => err)
}

export default ({ navigation }) => (
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
            style={styles.signupBtn}
            title="SIGN UP"
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            onPress={() => { if (this.handleSignupSubmit()) {
              onSignIn().then(() => navigation.navigate("SignedIn"))
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
  signupBtn: {
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
