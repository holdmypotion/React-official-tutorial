import React, { Component } from 'react'
import Square from './Square'

export class Board extends Component {
  // Refactor
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  /**
   * *Refactor
   */
  handleClick = (i) => {
    // Making a copy of squares Array
    const squares = this.state.squares.slice();
    // Updating the new squares array
    squares[i] = 'X';

    // Overriding the old array with the new one
    this.setState({
      squares: squares
    })

  }

  /*
  The DOM <button> element’s onClick attribute has a special meaning to React 
  because it is a built-in component. For custom components like Square, 
  the naming is up to you. We could give any name to the Square’s onClick 
  prop or Board’s handleClick method, and the code would work the same. 
  In React, it’s conventional to use on[Event] names for props which represent 
  events and handle[Event] for the methods which handle the events.
  */
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  // Refactor
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
