import React from 'react';
import {fetchPotter} from './services/fetchPotter';
import './App.css';

const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      potterList: []
    }
  }

  getPotter() {
    fetchPotter()
      .then(data => {
        data.map(item => {
          return {item}
        });

        this.setState({
          potterLsit: data
        });
      });
  }

  render() {
    const {potterList} = this.state;
    return (
      <div className="App">

      </div>
    )
  }
}


export default App;
