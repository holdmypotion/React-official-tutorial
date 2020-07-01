import React, { Component } from 'react'
import Square from './Square'

export class Board extends Component {
  // Refactor
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

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
        value={this.props.squares[i]} 
        // onClick={() => this.props.onClick(i)}
        onClick={this.props.onClick.bind(this, i)}
      />
    );
  }
  
  // Refactor
  render() {
    return (
      <div>
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

