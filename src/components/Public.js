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
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

export default class Public extends Component {
 constructor(props){
   super(props)
     this.state = ({
       searchDecks: [],
       deckIds: []
     })
 }

 componentWillMount() {
   this.fetchAllUserDecks()
 }

 fetchAllUserDecks = () => {
   axios.get(`${REACT_APP_API_URL}/getAllDecksForUser`)
     .then((r) => {
       const data = r.data.userDecks.map(deck => deck.id)
       this.setState({
         ...this.state,
         deckIds: data
       })
     })
     .catch(err => console.log(err))
 }

searchInput = () => {
  console.log(this.refs.input.input._lastNativeText)
  let searchedDecks = this.props.navigation.state.params.publicDecks.filter(deck =>
  deck.title === this.refs.input.input._lastNativeText ||
  deck.author === this.refs.input.input._lastNativeText ||
  deck.subject === this.refs.input.input._lastNativeText)
  this.setState({
    searchDecks: searchedDecks
  })
}

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={this.searchInput}>
            <View style={styles.searchButton}>
              <Icon name="search" color="white" size={30}></Icon>
            </View>
          </TouchableHighlight>
          <SearchBar
            lightTheme
            showLoading={true}
            platform="ios"
            ref="input"
            noIcon={true}
            placeholder='Search'
            inputStyle={styles.searchText}/>
        </View>
        <View>
          <ScrollView style={{ marginBottom: 75}}>
            {this.state.searchDecks.length < 1 &&
            this.props.navigation.state.params.publicDecks.author ===
            this.props.navigation.state.params.currentUser ?
            this.props.navigation.state.params.publicDecks.map(deck =>
            <TouchableHighlight key={deck.id} underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CardList', { deck_id: deck.id, currentUser: this.props.navigation.state.params.currentUser, deckAuthor: deck.author })}>
              <View style={styles.decks}>
                <View style={styles.subjectAuthorContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{deck.title}</Text>
                  </View>
                  {
                    this.state.deckIds.includes(deck.id) ?
                    <View style={styles.authorContainer}>
                      <Icon style={styles.arrowStyle} name="check-circle-o" size={34}></Icon>
                  </View> :
                  null
                  }
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
            </TouchableHighlight>) : null}
            {this.state.searchDecks.length < 1 &&
            this.props.navigation.state.params.publicDecks.author !==
            this.props.navigation.state.params.currentUser ?
            this.props.navigation.state.params.publicDecks.map(deck =>
            <TouchableHighlight key={deck.id} underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CardList', { deck_id: deck.id, currentUser: this.props.navigation.state.params.currentUser, deckAuthor: deck.author })}>
              <View style={styles.decks}>
                <View style={styles.subjectAuthorContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{deck.title}</Text>
                  </View>
                  {
                    this.state.deckIds.includes(deck.id) ?
                    <View style={styles.authorContainer}>
                      <Icon style={styles.arrowStyle} name="check-circle-o" size={34}></Icon>
                  </View> :
                  null
                  }
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
            </TouchableHighlight>) : null}
            {this.state.searchDecks.length > 0 &&
            this.props.navigation.state.params.publicDecks.author ===
            this.props.navigation.state.params.currentUser ?
            this.state.searchDecks.map(deck =>
            <TouchableHighlight key={deck.id} underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CardList', { deck_id: deck.id, currentUser: this.props.navigation.state.params.currentUser, deckAuthor: deck.author })}>
                <View style={styles.decks}>
                  <View style={styles.subjectAuthorContainer}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleText}>{deck.title}</Text>
                    </View>
                    {
                      this.state.deckIds.includes(deck.id) ?
                      <View style={styles.authorContainer}>
                        <Icon style={styles.arrowStyle} name="check-circle-o" size={34}></Icon>
                    </View> :
                    null
                    }
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
            </TouchableHighlight>) : null}
            {this.state.searchDecks.length > 0 &&
            this.props.navigation.state.params.publicDecks.author !==
            this.props.navigation.state.params.currentUser ?
            this.state.searchDecks.map(deck =>
            <TouchableHighlight key={deck.id} underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CardList', { deck_id: deck.id, currentUser: this.props.navigation.state.params.currentUser, deckAuthor: deck.author })}>
              <View style={styles.decks}>
                <View style={styles.subjectAuthorContainer}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{deck.title}</Text>
                  </View>
                  {
                    this.state.deckIds.includes(deck.id) ?
                    <View style={styles.authorContainer}>
                      <Icon style={styles.arrowStyle} name="check-circle-o" size={34}></Icon>
                  </View> :
                  null
                  }
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
            </TouchableHighlight>) : null}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 70
  },
  searchButton: {
    marginTop: 8,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: '#79B45D',
    padding: 5,
    paddingRight: 9,
    paddingLeft: 9,
    borderRadius: 5,
    height: 50,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
  },
  container: {
    paddingLeft: 5,
    paddingRight:1,
    justifyContent: 'center',
    marginTop: 35
  },
  searchText: {
    fontSize: 20,
    color: 'black',
    height: 50,
    width: width-90
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
