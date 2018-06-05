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
    },
    password: {
      error: 'Insert a valid password'
    }
  }
}

handleSubmit = () => {
  const something = this._form.getValue()
  const value = this._form.refs.input.refs.email.props.value
  if (something !== null) {
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
  .then(r => console.log(r))
  .catch(err => console.log(err))
}


export default ({ navigation }) => (
  <View style={{ paddingTop: 100 }}>
    <Card>
      <Form
        ref={c => this._form = c}
        type={User}
        options={options}
        />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => { if (this.handleSubmit()) {
          onSignIn().then(() => navigation.navigate("SignedIn"))
        }
      }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("Signin")}
      />
    </Card>
  </View>
)

const styles = StyleSheet.create({
  // LOGIN SCREEN STYLES
  container: {
    paddingTop: 100,
  },
  email: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  }
})
