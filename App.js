import React from "react"
import { createRootNavigator } from "./src/components/Router"
import { isSignedIn } from "./src/components/Auth"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      userDecks: [],
      publicDecks: [],
    }
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"))
  }

  fetchAllDecks(){
    fetch('https://mtn-study.herokuapp.com/getAllDecksForUser')
      .then(r => r.json())
      .then((json) => {
        this.setState({
          userDecks: [...this.state.userDecks, json]
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null
    }

    const Layout = createRootNavigator(signedIn)
    return <Layout />
  }
}
