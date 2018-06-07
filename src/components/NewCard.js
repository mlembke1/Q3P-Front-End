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

const Form = t.form.Form

const card = t.struct({
  front: t.String,
  back: t.String,
})


const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.textbox.normal.borderRadius = 10;
stylesheet.textbox.normal.height = 150;
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
stylesheet.textbox.error.borderRadius = 10;
stylesheet.textbox.error.height = 150;
stylesheet.textbox.error.width = 300;
stylesheet.textbox.error.marginLeft = 20;
stylesheet.textbox.error.marginRight = 20;
stylesheet.textbox.error.textAlign = 'center';


const options = {
  stylesheet,
  auto: 'placeholders',
  fields: {
    front: {
      error: <Text>Create the front side, dummy.</Text>,
      multiline: true
    },
    back: {
      error: <Text>Create the back side, dummy.</Text>,
      multiline: true
    }
  }
}


export default class NewCard extends Component {


  handlePress = () => {
    obj = {
      front: this._form.getValue().front,
      back: this._form.getValue().back,
      deck_id: this.props.navigation.state.params.deck_id
    }
    this.props.navigation.state.params.createCard(obj)
    this.props.navigation.navigate('CardList', { deck_id: this.props.navigation.state.params.deck_id })
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Form
          ref={c => this._form = c}
          type={card}
          options={options} />
        <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={this.handlePress}>
            <View style={styles.createCardButton}>
              <View style={styles.createCardButtonContent}>
                <Icon name="plus" color="white" size={24}/>
              <Text style={styles.createCardButtonText}>Create Card</Text>
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
    justifyContent: 'center'
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
  createCardButton: {
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
  createCardButtonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  createCardButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    marginLeft: 10
  }
})
