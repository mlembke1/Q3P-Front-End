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
  ImageBackground,
  Switch
} from 'react-native'
import { Card, Button, FormLabel, FormInput } from "react-native-elements"
import t from 'tcomb-form-native'
import { onSignIn } from "./Auth"
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'
const _ = require('lodash');

const Form = t.form.Form

const User = t.struct({
  username: t.String,
  password: t.String,
})


const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
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


const options = {
  stylesheet,
  auto: 'placeholders',
  fields: {
    username: {
      error: <Text>Insert a valid username</Text>
    },
    password: {
      error: <Text>Insert a valid password</Text>
    }
  }
}

export default class Login extends Component {

  doesUserExist = (enteredUsername) => {
    return new Promise((resolve, reject) => {
      axios.get(`${REACT_APP_API_URL}/getAllUsers`)
      .then(r => {
        console.log(r.data.allUsers)
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
        })
        .catch(() => alert('That user doesn\'t exist'))
    } else {
      console.log('whoops')
    }
  }

  loginUser = (userToLogin) => {
    axios.post(`${REACT_APP_API_URL}/login`, userToLogin)
    .then(r => {
        if (r.data.loginStatus === 'success') {
          onSignIn().then(() => this.props.navigation.navigate("SignedIn"))
        }
    })
    .catch(err => err)
  }

  render(){
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
                style={styles.loginBtn}
                title="LOGIN"
                fontSize={22}
                borderRadius={100}
                backgroundColor="#79B45D"
                onPress={this.handleLoginSubmit}
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
