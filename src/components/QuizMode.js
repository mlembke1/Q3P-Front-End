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
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'
import CardFlip from 'react-native-card-flip'



export default class CardList extends Component {

  constructor(props){
    super(props)
    this.state = {
      allCards: []
    }
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

  componentWillMount() {
      this.fetchAllCards()
      this.animatedValue = new Animated.Value(0)
      this.animatedValue.addListener(({ value }) => {
        this.value = value
      })
      this.frontInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
      })
      this.backInterpolate = this.animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
      })
  }


  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate }
      ]
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper loop={false} showPagination={false} index={0}>
          {
            this.state.allCards.map((item, index) => {
              return (
                <TouchableOpacity key={item.id} onPress={() => this['card' + index].flip()} >
                  <CardFlip style={styles.flipCard} ref={ (card) => this['card' + index] = card } >
                    <View style={[styles.flipCard, styles.flipCardFront]}>
                      <Text style={styles.flipText}>
                        {item.front}
                      </Text>
                    </View>
                    <View style={[styles.flipCard, styles.flipCardBack]}>
                      <Text style={styles.flipText}>
                        {item.back}
                      </Text>
                    </View>
                  </CardFlip>
                </TouchableOpacity>
              )
            })}
        </Swiper>
      </ScrollView>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center'
  },
  flipCard: {
    width: width - 30,
    height: (width / 2) + 70,
    marginTop: 70,
    margin: 5,
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
    padding: 5
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
  }
})
