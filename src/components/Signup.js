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


const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email)
})

const User = t.struct({
  email: Email,
  username: t.String,
  password: t.String,
  terms: t.Boolean
})

var options = {
  auto: 'placeholders',
  fields: {
    email: {
      error: 'Insert a valid email'
    }
  }
}

handleSubmit = () => {
  const something = this._form.getValue()
  const value = this._form.refs.input.refs.email.props.value
  if (something !== null) {
    return true
  } else {
    return false
  }
}


export default ({ navigation }) => (
  <View style={{ paddingVertical: 100 }}>
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
  email: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
})
