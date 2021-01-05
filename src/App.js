import React from 'react';

const Square = () => {
  return (
    <button
      className={'square'}
      onClick={() => this.props.onClick()}
    >
      {this.props.value}
    </button>
  );
};

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
    }

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className={'status'}>{status}</div>
        <div className={'board-row'}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className={'game-info'}>
          <div></div>
          <ol></ol>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'game'}>
        <div className={'game-board'}>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
