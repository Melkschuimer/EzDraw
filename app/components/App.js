import React from 'react'
import { View, Text } from '../components.js'

//Components
import Game from './Game'
import ChooseName from './ChooseName'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
    }
  }
  render() {
    let { username } = this.state
    let onSubmit = event => {
      let chosenName = event.target.value
      if (event.keyCode === 13 && chosenName) {
        this.setState({ username: chosenName })
      }
    }
    //If we don't have a username yet, make us choose one, then we can continue to the game
    if (username === null) {
      return (
        <ChooseName onSubmit={onSubmit}/>
      )
    }
    else {
      return (
        <Game username={username}/>
      )
    }
  }
}
