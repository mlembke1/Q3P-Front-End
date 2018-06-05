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

  return axios.get(`${REACT_APP_API_URL}/getAllUsers`)
    .then((r) => {
      if (something !== null && r.data.allUsers.some(x => x.username === something.username)) {
        const objectToPost = {
          username: something.username,
          password: something.password
        }
        this.loginUser(objectToPost)
        return true
      } else {
        return false
      }
    })
    .catch(err => err)
}

loginUser = (userToLogin) => {
  axios.get(`${REACT_APP_API_URL}/login`, userToLogin)
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
            style={styles.loginBtn}
            title="LOGIN"
            fontSize={22}
            borderRadius={100}
            backgroundColor="#79B45D"
            onPress={() => { if (this.handleLoginSubmit()) {
              onSignIn().then(() => navigation.navigate("SignedIn"))
            } else {
              alert('Wrong something')
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
