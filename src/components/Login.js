import React, { Component } from "react"
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

const options = {
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

export default class Login extends Component {

  // doesUserExisit = async enteredUsername => {
  //   await axios.get(`${REACT_APP_API_URL}/getAllUsers`)
  //           .then(r => {
  //             r.data.allUsers.some(x => x.username === enteredUsername)
  //           })
  //
  // }

  doesUserExist = (enteredUsername) => {
    return new Promise((resolve, reject) => {
      axios.get(`${REACT_APP_API_URL}/getAllUsers`)
      .then(r => {
        if (r.data.allUsers.some(x => x.username === enteredUsername)) {
          resolve()
        } else {
          reject()
        }
      })
    })
  }

  handleLoginSubmit = () => {
    const something = this._form.getValue()
    const value = this._form.refs.input.refs.username.props.value
     if (something !== null ) {
       this.doesUserExist(something.username)
        .then(() => {
            const objectToPost = {
              username: something.username,
              password: something.password
            }
            this.loginUser(objectToPost)
            onSignIn().then(() => this.props.navigation.navigate("SignedIn"))
        })
        .catch(() => alert('That user doesn\'t exist'))
    } else {
      console.log('whoops')
    }
}

  loginUser = (userToLogin) => {
    axios.post(`${REACT_APP_API_URL}/login`, userToLogin)
    .then(r => r)
    .catch(err => err)
  }

  render(){
    return (
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
                onPress={this.handleLoginSubmit}
              />
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

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
