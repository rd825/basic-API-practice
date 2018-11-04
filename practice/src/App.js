import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    axios.get('https://www.anapioficeandfire.com/api/houses')
         .then(res => this.setState({
           data: res.data,
         }))
         .catch(err => console.dir(err));
  }



  render() {
    return (
      <div className="App">
        {this.state.data.map((datum, i) => <p key={i}>{datum.name}</p>)}
      </div>
    );
  }
}

export default App;