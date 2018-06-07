import React, { Component } from 'react'
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
  StatusBar,
  TouchableHighlight
} from 'react-native'
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import t from 'tcomb-form-native'
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'
const _ = require('lodash')

const width = Dimensions.get('window').width

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.textbox.normal.borderRadius = 100;
stylesheet.textbox.normal.height = 50;
stylesheet.textbox.normal.backgroundColor = 'white';
stylesheet.textbox.normal.width = width - 20;
stylesheet.textbox.normal.marginLeft = 10;
stylesheet.textbox.normal.marginRight = 10;
stylesheet.textbox.normal.textAlign = 'left';
stylesheet.controlLabel.normal.textAlign = 'center'
stylesheet.checkbox.normal.left = (width / 2) - 28


const Form = t.form.Form
const Deck = t.struct({
  title: t.String,
  subject: t.String,
  public: t.Boolean
})
const options = {
  stylesheet,
  auto: 'placeholders'
}

export default class NewDeck extends Component {

  postNewDeck = () => {
    let obj = {}
    if (this._form.getValue() === null) {

    } else {
      if (this._form.getValue().public === false) {
        obj = {
          title: this._form.getValue().title,
          subject: this._form.getValue().subject,
          public: 'F'
        }
      } else {
        obj = {
          title: this._form.getValue().title,
          subject: this._form.getValue().subject,
          public: 'T'
        }
      }
    }
    axios.post(`${REACT_APP_API_URL}/createDeck`, obj)
      .then((result) => {
        if (result.data.newDeckStatus === 'success' ){
          this.props.navigation.navigate('Decks')
        }
      })
      .catch((err) => {
        console.log(`Could not create deck.\nErrorCode: ${err}`)
      })
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Form
          ref={c => this._form = c}
          type={Deck}
          options={options} />
        <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={this.postNewDeck}>
          <View style={styles.createDeckButton}>
            <View style={styles.createDeckButtonContent}>
              <Icon name="plus" color="white" size={24}/>
              <Text style={styles.createDeckButtonText}>Create Deck</Text>
            </View>
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  list: {
    width,
    marginTop: 0
  },
  createDeckButton: {
    marginBottom: 10,
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: '#79B45D',
    padding: 5,
    paddingRight: 9,
    paddingLeft: 9,
    borderRadius: 5,
    height: 60,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
  },
  createDeckButtonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  createDeckButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 10
  }
})
