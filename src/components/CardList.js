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
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const cards = [
  {
    id: 0,
    front: 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?',
    back: 'Too much!',
    deck_id: 0
  },
  {
    id: 0,
    front: 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?',
    back: 'Too much!',
    deck_id: 0
  }
]

export default class CardList extends Component {
  componentWillMount() {
    this.animatedValue = []
    this.value = []
    for (let i = 0; i < cards.length; i++) {
      this.animatedValue[i] = new Animated.Value(0)
      this.animatedValue[i].addListener(({ value }) => {
        this.value[i] = value
      })
      this.frontInterpolate = this.animatedValue[i].interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
      })
      this.backInterpolate = this.animatedValue[i].interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
      })
    }
  }

  flipCard(i) {
    if (this.value[i] >= 90) {
      Animated.spring(this.animatedValue[i], {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue[i], {
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
        <View style={styles.authorView}>
          <View style={{ margin: 10 }}>
            <Text style={styles.topText}>
              Author: Nathan
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.topText}>
              Created: 05/31/18
            </Text>
          </View>
          <Button backgroundColor="#79B45D" borderRadius={100} style={styles.quiz} title="Quiz Mode" />
        </View>
        <StatusBar barStyle="light-content" />
        {
          cards.map((card, i) => (
            // <ListItem id={card.id} key={i} title={card.front} subtitle={card.back} />
            <View id={card.id} key={i} styles={styles.container}>
              <View>
                <TouchableOpacity onPress={() => this.flipCard(i)}>
                  <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <Text style={styles.flipText}>
                      {card.front}
                    </Text>
                  </Animated.View>
                  <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                    <Text style={styles.flipText}>
                      {card.back}
                    </Text>
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          ))
        }
      </ScrollView>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 5,
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
    margin: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7,
    borderRadius: 20,
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    position: 'absolute',
    top: 0
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
