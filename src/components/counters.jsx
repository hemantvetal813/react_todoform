import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
          ],
        inputValue: 0
    };
    render () {
        return (
            <div>
                <input id="changeValue" type="number" value={ this.state.inputValue } onChange={ this.updateInputValue }></input>
                <Counter counters={ this.state.counters } bodmas={ this.handleBodmas } />
            </div>
        );
    }

    updateInputValue = evt => {
        this.setState({
            inputValue: evt.target.value
        });
    };

    handleBodmas = (c, sign) => {
        let value = this.state.inputValue ? parseInt(this.state.inputValue) : 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        counters[index] = { ...c };
        switch (sign) {
          case 'add':
            counters[index].value += value;
            break;
          case 'sub':
            counters[index].value -= value;
            break;
          case 'mul':
            counters[index].value *= value;
            break;
          case 'div':
            counters[index].value = Math.floor(counters[index].value / value);
            break;
          case 'mod':
            counters[index].value %= value;
            break;
          case 'square':
            counters[index].value **= value;
            break;
          default:
            break;
        }
        this.setState({ counters });
      };

}

export default Counters;