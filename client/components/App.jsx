import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    for (var i = 0, i < 42, i++) {
      board +=
    }
    return (
      <div>
        <div id="container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;


/*

board = [
  [O, O, O, O, O, O],
  [O, O, O, O, O, O],
  [O, O, O, O, O, O],
  [O, O, O, O, O, O],
  [O, O, O, O, O, O]
]

render() {
  <Board board={this.state.board} />
}

--Board--
render() {
  {this.props.board.map()}
}
*/