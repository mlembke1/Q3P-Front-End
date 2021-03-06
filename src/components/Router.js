import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  StatusBar
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  NavigationActions
} from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import Signup from "./Signup"
import Login from "./Login"
import Settings from "./Settings"
import Decks from "./Decks"
import Public from "./Public"
import Dashboard from "./Dashboard"
import WelcomePage from "./WelcomePage"
import CardList from "./CardList"
import NewDeck from "./NewDeck"
import QuizMode from "./QuizMode"
import NewCard from "./NewCard"

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

export const SignedOut = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      title: '<STUDY.ENV/>',
      headerStyle: {
        backgroundColor: '#79B45D',
        marginBottom: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'HelveticaNeue-UltraLight',
        letterSpacing: 6,
        fontWeight: '300'
      }
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "SIGN UP",
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#79B45D'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'HelveticaNeue-UltraLight',
        letterSpacing: 6,
        fontWeight: '300'
      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "LOGIN",
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#79B45D'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'HelveticaNeue-UltraLight',
        letterSpacing: 6,
        fontWeight: '300'
      }
    }
  }
})

export const SignedIn = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'MY DASHBOARD',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 24,
          fontFamily: 'HelveticaNeue-UltraLight',
          fontWeight: '300',
          letterSpacing: 6
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'My Settings',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        }
      }
    },
    Public: {
      screen: Public,
      navigationOptions: {
        title: 'Public',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        }
      }
    },
    Decks: {
      screen: Decks,
      navigationOptions: {
        title: 'My Decks',
        headerTintColor: '#FFFFFF',
        headerRight: (
          <View>
            <Icon name="gear" color="white" size={28} style={{ paddingRight: 20 }} />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        }
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        title: 'Create a New Deck',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        },
        headerTintColor: '#FFFFFF',
        headerRight: (
          <View>
            <Icon name="gear" color="white" size={28} style={{paddingRight: 20}}  />
          </View>
        )
      }
    },
    CardList: {
      screen: CardList,
      navigationOptions: {
        title: 'Cards in This Deck',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        },
        headerTintColor: '#FFFFFF',
        headerRight: (
          <View>
            <Icon name="gear" color="white" size={28} style={{paddingRight: 20}}  />
          </View>
        )
      }
    },
    NewCard: {
      screen: NewCard,
      navigationOptions: {
        title: 'Create a New Card',
        headerStyle: {
          backgroundColor: '#79B45D',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        },
        headerTintColor: '#FFFFFF',
        headerRight: (
          <View>
            <Icon name="gear" color="white" size={28} style={{paddingRight: 20}}  />
          </View>
        )
      }
    },
    QuizMode: {
      screen: QuizMode,
      navigationOptions: {
        title: 'Quiz Mode',
        headerStyle: {
          backgroundColor: '#79B45D'
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20
        },
        headerTintColor: '#FFFFFF',
        headerRignt: (
          <View>
            <Icon name="gear" color="white" size={28} style={{ paddingRignt: 20 }} />
          </View>
        )
      }
    }
  }
)

export const createRootNavigator = (signedIn = false ) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  )
}
