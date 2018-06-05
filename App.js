import React from "react"
import { createRootNavigator } from "./src/components/Router"
import { isSignedIn } from "./src/components/Auth"
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"))
  }

  render() {
    const { checkedSignIn, signedIn } = this.state
    if (!checkedSignIn) {
      return null
    }
    const Layout = createRootNavigator(signedIn)
    return <Layout/>
  }
}
