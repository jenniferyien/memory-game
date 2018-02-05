import React, { Component } from 'react';
import './GamePlay.css'

class GamePlay extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      cardPosition: '', 
      prevSelected: '', 
      prevValue: '', 
      currentSelected: '', 
      currentValue: '',
      complete: []
    }
    this.flipCard = this.flipCard.bind(this)
    this.checkSelection = this.checkSelection.bind(this)
  }
  
  flipCard(position, value) {
    const { checkSelection } = this
    let prevSelected = this.state.prevSelected
    let prevValue = this.state.prevValue
    let currentSelected = this.state.currentSelected
    let currentValue = this.state.currentValue
    if (prevSelected === '') {
      prevSelected = position
      prevValue = value
    } else {
      currentSelected = position
      currentValue = value
    }
    this.setState({
      cardPosition: position, 
      prevSelected: prevSelected, 
      prevValue: prevValue,
      currentSelected: currentSelected,
      currentValue: currentValue
    })
    if (prevSelected !== '' && currentSelected !== '') {
      setTimeout(function(){ 
        checkSelection(prevSelected, prevValue, currentSelected, currentValue)
      }, 1000)
    }
  }
  
  checkSelection(preIndex, prev, currentIndex, current) {
    const { complete } = this.state
    let match = prev === current
    if (match) {
      complete.push(preIndex, currentIndex)
    }
    this.setState({
      cardPosition: '', 
      prevSelected: '', 
      prevValue: '',
      currentSelected: '',
      currentValue: ''
    })
  }
  
  render() {
    const { cardPosition, prevSelected, currentSelected, complete } = this.state
    const { grid, play } = this.props
    const { flipCard } = this
    let cols = [], click
    if (grid) {
      const colWidth = Math.floor(12/grid[0])
      const colNum = parseInt(grid[0]) * parseInt(grid[1])
      for(let i = 0; i< colNum; i++){
        if (complete.indexOf(i) >= 0) {
          click = () => {
            alert("This tile has already been matched/completed")
          }
        } else {
          click = () => flipCard(i, play[i])
        }
        cols.push(
          <div key={i} className={`box col-xs-${colWidth}`}>
            {
              prevSelected !== i && cardPosition !== i &&
                <div className={`card hidden-card ${complete.indexOf(i) >= 0 ? 'complete': ''}`}
                  onClick={click}/>
            }
            {
              (prevSelected === i || currentSelected === i) &&
                <div className={`card display-${play[i]}`}>
                  {play[i]}
                </div>
            }
          </div>
        )
      }
    }
    
    return (
      <div className="game-play">
        {cols}
      </div>
    );
  }
}

export default GamePlay;