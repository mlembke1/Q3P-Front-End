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
import { Card, Button, FormValidationMessage } from "react-native-elements"
import t from 'tcomb-form-native'
import { onSignIn } from "./Auth"
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'
const _ = require('lodash')

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

const stylesheet = _.cloneDeep(t.form.Form.stylesheet)
stylesheet.textbox.normal.borderRadius = 100;
stylesheet.textbox.normal.height = 50;
stylesheet.textbox.normal.backgroundColor = 'white';
stylesheet.textbox.normal.width = 300;
stylesheet.textbox.normal.marginLeft = 20;
stylesheet.textbox.normal.marginRight = 20;
stylesheet.textbox.normal.textAlign = 'center';
stylesheet.errorBlock.backgroundColor = 'tomato';
stylesheet.errorBlock.width = 240;
stylesheet.errorBlock.marginLeft = 50;
stylesheet.errorBlock.marginRight = 30;
stylesheet.errorBlock.color = 'white';
stylesheet.errorBlock.textAlign = 'center';
stylesheet.textbox.error.backgroundColor = 'white';
stylesheet.textbox.error.borderRadius = 100;
stylesheet.textbox.error.height = 50;
stylesheet.textbox.error.width = 300;
stylesheet.textbox.error.marginLeft = 20;
stylesheet.textbox.error.marginRight = 20;
stylesheet.textbox.error.textAlign = 'center';

var options = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    email: {
      error: 'Insert a valid email',
    },
    username: {
      error: 'Insert a valid username',
    },
    password: {
      error: 'Insert a valid password',
    }
  }
}

export default class Signup extends Component {


  doesUserExist = (enteredUsername) => {
    return new Promise((resolve, reject) => {
      axios.get(`${REACT_APP_API_URL}/getAllUsers`)
      .then(r => {
        if (r.data.allUsers.some(x => x.username === enteredUsername)) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }

  handleSignupSubmit = () => {
    const something = this._form.getValue()
    const value = this._form.refs.input.refs.email.props.value

    if (something !== null ) {
      this.doesUserExist(something.username)
       .then(() => {
           const objectToPost = {
             username: something.username,
             password: something.password,
             email: something.email
           }
           this.postUser(objectToPost)
           onSignIn().then(() => this.props.navigation.navigate("SignedIn"))
       })
       .catch(() => alert('That username has already been taken'))
   } else {
     console.log('whoops')
   }
  }

  postUser = (newUserObject) => {
    axios.post(`${REACT_APP_API_URL}/signup`, newUserObject)
    .then(r => r)
    .catch(err => err)
  }


  render() {
    return (
      <ImageBackground
        source={require('../../assets/background-image.jpg')}
        style={styles.backgroundImage} >
        <ScrollView>
          <View style={styles.container}>
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
                onPress={this.handleSignupSubmit}
              />
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
