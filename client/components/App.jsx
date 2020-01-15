import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Test React App
      </div>
    );
  }
}

export default App;
