import React, { Component } from 'react'

/**
 * *Class Style Component
 */
// export class Square extends Component {

//   render() {
//     return (
//       <button
//         className='square'
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

/**
 * *Function Style Component
 */
function Square(props) {
  return (
    <button
      className='square'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

export default Square
