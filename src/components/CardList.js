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
  Animated,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'
import CardFlip from 'react-native-card-flip'


export default class CardList extends Component {
  constructor(){
    super()
    this.state = {
      allCards: [],
      deckIds: [],
      editMode: false,
      isLoading: true
    }
  }

  componentWillMount() {
    this.fetchAllCards()
    this.fetchAllUserDecks()
  }

  fetchAllUserDecks = () => {
    axios.get(`${REACT_APP_API_URL}/getAllDecksForUser`)
      .then((r) => {
        const data = r.data.userDecks.map(deck => deck.id)
        this.setState({
          deckIds: data
        })
      })
      .catch(err => console.log(err))
  }

  fetchAllCards = () => {
    axios.post(`${REACT_APP_API_URL}/getAllCards`, {deck_id:this.props.navigation.state.params.deck_id})
    .then(r => {
      this.setState({
        allCards: r.data.allCards
      })
    })
    .catch(err => console.log(`Failed to get all cards`, err))
  }


  createCard = (newCard) => {
    axios.post(`${REACT_APP_API_URL}/createCard`, newCard)
    .then(r => {
      this.setState({
        allCards: this.state.allCards.concat([newCard])
      })
    })
    .catch(err => console.log(`Failed to create a card`, err))
  }


  deleteCard = (info) => {
    axios.delete(`${REACT_APP_API_URL}/deleteCard`, { data: info })
    .then(r => {
      this.setState({
        allCards: r.data.updatedCards
      })
    })
    .catch(err => console.log(`Failed to delete a card`, err))
  }

  editCard = (cardToEdit) => {
    axios.put(`${REACT_APP_API_URL}/editCard`, cardToEdit)
    .then(r => {
      this.setState({
        allCards: r.data.updatedCards
        })
      })
    .catch(err => console.log(`Failed to updated a card`, err))
  }

  editDeck = () => {
    if (this.state.editMode === true)  {
      this.setState({
        editMode: false
        })
    } else {
      this.setState({
        editMode: true
        })
    }
  }

  handleDeletePress = (info) => {
    console.log(info)
    this.deleteCard(info)
  }

  addJoin = () => {
    axios.post(`${REACT_APP_API_URL}/addDeck`, {deck_id: this.props.navigation.state.params.deck_id})
      .then((r) => {
        alert('The deck has been added to your collection!')
      })
      .catch(err => console.log(`Failed to add a deck`, err))
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.authorView}>
          <View style={{ margin: 10 }}>
            <Text style={styles.topText}>
              Author: { this.props.navigation.state.params.deckAuthor }
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.topText}>
              Created: 06/08/18
            </Text>
          </View>
          <View>
            <Button backgroundColor="#79B45D" borderRadius={100} style={styles.quiz} title="Quiz Mode" onPress={() =>
              this.props.navigation.navigate('QuizMode', { deck_id: this.props.navigation.state.params.deck_id })} />
          </View>
          <View>
            {this.props.navigation.state.params.currentUser === this.props.navigation.state.params.deckAuthor
              && this.state.editMode === false ?
                <Button backgroundColor="#995db4" borderRadius={100} style={styles.edit} title="Edit Deck" onPress={() =>
                this.editDeck()}/> : null}
            {this.props.navigation.state.params.currentUser === this.props.navigation.state.params.deckAuthor
              && this.state.editMode === true ?
                <Button backgroundColor="#5d96b4" borderRadius={100} style={styles.save} title="Save Deck" onPress={() =>
                this.editDeck()}/>
                : null}
          </View>
          <View>
            {!this.state.deckIds.includes(this.props.navigation.state.params.deck_id) ?
            <Button style={styles.save} backgroundColor="#995db4" borderRadius={100} style={styles.edit} title="Add Deck" onPress={() => this.addJoin()} /> :
            null}
          </View>
        </View>
        <StatusBar barStyle="light-content" />
        {
          this.state.allCards.map((item, index) => {
            return (
              <TouchableOpacity key={item.id} onPress={this.state.editMode === false ? () => this['card' + index].flip() :
              () => this.handleDeletePress({deck_id: this.props.navigation.state.params.deck_id, card_id: item.id})} >
                <CardFlip style={styles.flipCard} ref={ (card) => this['card' + index] = card } >
                  <View style={[styles.flipCard, styles.flipCardFront]}>
                    <TouchableHighlight style={{ alignItems: 'flex-end', bottom: 13, marginRight: 8}}>
                    {this.state.editMode === true ?
                      <Icon name="minus-circle" color="#B4645D" size={50} /> :
                      <Icon style={{height: 51}} size={34} />}
                    </TouchableHighlight>
                    <Text style={this.state.editMode === true? styles.textEditMode : styles.flipText}>
                      {
                        item.front.length > 30 ?
                        item.front.slice(0, 29).concat('...') :
                        item.front
                      }
                    </Text>
                  </View>
                  <View style={[styles.flipCard, styles.flipCardBack]}>
                    <TouchableHighlight style={{ alignItems: 'flex-end', bottom: 13, marginRight: 8}}>
                    {this.state.editMode === true ?
                      <Icon name="minus-circle" color="#B4645D" size={50} /> :
                      <Icon style={{height: 51}} size={34} />}
                    </TouchableHighlight>
                    <Text style={this.state.editMode === true? styles.textEditMode : styles.flipText}>
                      {
                        item.back.length > 30 ?
                        item.back.slice(0, 29).concat('...') :
                        item.back
                      }
                    </Text>
                  </View>
                </CardFlip>
              </TouchableOpacity>
            )
          })
        }
        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard', { deck_id: this.props.navigation.state.params.deck_id, createCard: this.createCard })}>
          <View style={styles.addCard}>
            <Icon style={{ textAlign: 'center' }} name="plus" size={40} color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.invisiCard} />
      </ScrollView>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  buttonContainer: {
    width
  },
  flipCard: {
    width: (width / 2) - 15,
    height: (width / 2) - 15,
    marginLeft: 4,
    margin: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7,
    backfaceVisibility: 'hidden'
  },
  flipCardFront: {
    backgroundColor: 'white'
  },
  flipCardBack: {
    backgroundColor: 'white'
  },
  addCard: {
    display: 'flex',
    width: (width / 2) - 50,
    height: (width / 2) - 50,
    margin: 25,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7,
    backgroundColor: '#b45da4',
    borderRadius: 20,
  },
  invisiCard: {
    display: 'flex',
    width: (width / 2) - 50,
    height: (width / 2) - 50,
    margin: 25,
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  flipText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    marginBottom: 30,
  },
  textEditMode: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    marginBottom: 30,
    color: "#b4645d"
  },
  authorView: {
    width: width + 5,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: 'black'
  },
  topText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },
  list: {
    width,
    marginTop: 0
  },
  quiz: {
    marginBottom: 10,
    marginTop: 5
  },
  edit: {
    marginBottom: 10,
    marginTop: 5
  },
  save: {
    marginBottom: 10,
    marginTop: 5
  }
})
