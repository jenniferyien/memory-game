import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OptionSelection from './OptionSelection';
import GamePlay from './GamePlay';

const items = [
  '3x4',
  '5x2',
  '4x4',
  '4x5'
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { option: '3x4', gameStart: false, playCards: [], gridSize: [] }
    this.pickOption = this.pickOption.bind(this)
    this.startGame = this.startGame.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.generate = this.generate.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  pickOption(e) {
    console.log(e.currentTarget.value)
    this.setState({
      option: e.currentTarget.value
    });
  }
  
  startGame() {
    const gridSize = this.state.option.split('x')
    const numberOfPairs = (parseInt(gridSize[0]) * parseInt(gridSize[1]))/2
    const pairs = this.shuffle(this.generate()).slice(0,numberOfPairs)
    const chosenPlay = this.shuffle(pairs.concat(pairs))
    this.setState({ 
      gameStart: true,
      playCards: chosenPlay,
      gridSize: gridSize
    })
  }
  
  generate() {
    let deck = [];
    for(var i=0; i < 10; i++){
      deck.push(i);
    };
    return deck;
  };
  
  restartGame() {
    this.setState({
      option: '3x4',
      gameStart: false,
      playCards: [],
      gridSize: [] 
    })
  }
  
  shuffle(o){
    for(var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  
  render(){
    const { option, gameStart, gridSize, playCards } = this.state
    console.log(this.state)
    return (
       <div className="main-page">
           <div>
             <h2>Memory Game</h2>
             <p>Please pick an option below to start the game.</p>
           </div>
          {
            !gameStart && 
            <OptionSelection value={option} onChangeOptions={(e) => this.pickOption(e)} />
          }
          {
            gameStart &&
            <GamePlay grid={gridSize} play={playCards} />
          }
          <div id='buttons'>
            {
              !gameStart &&
              <button id ='newGame' onClick={this.startGame}> Start Game </button>
            }
            {
              gameStart && 
              <button id='Reset' onClick={this.restartGame}>Reset Game</button>
            }
          </div>
       </div>
    );
  }
}
