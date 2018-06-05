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
import t from 'tcomb-form-native'
import { onSignIn } from "./Auth"

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
          onPress={() => {
            onSignIn().then(() => navigation.navigate("SignedIn"))
          }}
        />
      </Card>
    </View>
  </ScrollView>
)