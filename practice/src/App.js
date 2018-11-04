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
         .then(res => {
           let data = this.state.data;
           data.push(res.data);
           this.setState({
             data: data,
           })
           console.log(this.state.data[0])
         })
         .catch(err => console.dir(err));
  }



  render() {
    return (
      <div className="App">
        {this.state.data[0].map(x => <p>{x.name}</p>) }
      </div>
    );
  }
}

export default App;