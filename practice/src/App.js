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

    for (let i = 1; i < 10000; i++) {
      axios.get(`https://www.anapioficeandfire.com/api/houses/${i}`)
          .then(res => {
            let data = this.state.data.concat(res.data);
            this.setState({
              data: data,
            })
          })
          .catch(err => console.dir(err));
      }
  }



  render() {
    return (
      <div className="App">
        {this.state.data.map((x,i) => <p key={i}>{x.name}</p>) }
      </div>
    );
  }
}

export default App;