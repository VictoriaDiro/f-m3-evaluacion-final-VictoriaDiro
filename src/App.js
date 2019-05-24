import React from 'react';
import { FetchPotter } from './services/FetchPotter';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import Filters from './components/Filters';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      potterList: [],
      filterName: ''
    };
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidMount(){
    this.getPotter();

  }

  resetFilters() {
    this.setState({
      filterName: ''
    });
  }

  getPotter() {
    FetchPotter()
      .then(data => {

        const newData = data.map((item, index) => {
          return {...item, id: index};
        });

        this.setState({
          potterList: newData

        });
      });
  }

  handleNameFilter(event) {
    const buttonFilter = event.currentTarget.value;

    this.setState({
      filterName: buttonFilter
    })
  }

  render() {
    const {potterList, filterName, handleNameFilter} = this.state;
    return (

      <div className="App">
        <Filters></Filters>

        <Switch>


          <Route exact path="/" render={() => <CharacterList
            potterList={potterList}
            handleNameFilter={handleNameFilter}
            filterName={filterName}
            />
          } />
          <Route path="/character/:id" render={(takeParams) => (<CharacterCard      match={takeParams.match}
            potterList={potterList}
            resetFilters={this.resetFilters}
          /> )}
          />

        </Switch>
      </div>
    )
  }
}

export default App;
