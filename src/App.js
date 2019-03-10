import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}


class Board extends Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}


class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true
    }
  }

  handleClick(i) {
    let squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.calculateWinner(squares)
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    })
  }

  calculateWinner(board) {
    let possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < possibilities.length; i++) {
      let [a, b, c] = possibilities[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`${board[a]} wins!`)
      }
    }
  }

  render() {
    return (
      <div className='app'>
        <Board
          squares={this.state.squares}
          onClick={i => this.handleClick(i)}
        />
        <button className='reset-button' onClick={this.resetBoard.bind(this)}>
          Reset
        </button>
      </div>
    );
  }
}

export default Game;
