import React, { Component } from "react"
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
  ImageBackground,
  TouchableHighlight
} from 'react-native'
import { Card, Button, FormLabel, FormInput, SearchBar } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome'
import Dashboard from './Dashboard'


export default class Public extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View>
          <SearchBar
            lightTheme
            showLoading
            platform="ios"
            cancelButtonTitle="Cancel"
            placeholder='Search'
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchText}/>
        </View>
        <ScrollView>
          {this.props.navigation.state.params.publicDecks.map(deck =>
          <TouchableHighlight key={deck.id} underlayColor="transparent" activeOpacity={0.5} onPress={() => console.log("see deck #", deck.id)}>
            <View style={styles.decks}>
              <View style={styles.subjectAuthorContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{deck.title}</Text>
                </View>
                <View style={styles.authorContainer}>
                  <Icon style={styles.arrowStyle} name="chevron-circle-right" size={34}></Icon>
                </View>
              </View>
              <View style={styles.subjectAuthorContainer}>
                <View>
                  <Text style={styles.subjectText}>{deck.subject}</Text>
                </View>
                <View style={styles.authorContainer}>
                  <Text style={styles.authorText}>{deck.author}</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>)}
        </ScrollView>
      </View>
      )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    paddingLeft: 5,
    paddingRight:1,
    justifyContent: 'center'
  },
  searchText: {
    fontSize: 20,
    color: 'black',
  },
  titleText: {
    fontSize: 26,
    color: 'black',
    marginLeft: 10,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  subjectText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,
    color: 'gray'
  },
  authorText: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
    marginBottom: 10,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  subjectAuthorContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  titleContainer: {
    width: width-50,
    paddingRight: 10
  },
  arrowStyle: {
    paddingRight: 30,
    paddingTop: 20,
    color: '#79B45D'
  },
  decks: {
    width: width-10,
    marginBottom: 7,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
  }
})
