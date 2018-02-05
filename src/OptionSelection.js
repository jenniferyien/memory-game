import React, { Component } from 'react';
import './OptionSelection.css'

const items = [
  '3x4',
  '5x2',
  '4x4',
  '4x5'
];

class OptionSelection extends Component {

  render() {
    let resultRows = items.map(function(result){
        return (
          <div key={result} className='option'>
            <input type="radio" name="size_option" 
                 value={result}
                 checked={this.props.value === result}
                 onChange={this.props.onChangeOptions}/>
             <p>{result}</p>
           </div>
        );
    }, this);
    return (
      <div className="select-options">
          { resultRows }
      </div>
    );
  }
}

export default OptionSelection;
