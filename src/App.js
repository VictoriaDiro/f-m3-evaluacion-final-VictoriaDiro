import React from 'react';
import { FetchPotter } from './services/FetchPotter';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
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
          return {...data, id: `character-${index}`};
        });

        this.setState({
          potterLsit: newData
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
    const {potterList, filterName} = this.state;
    return (

      <div className="App">
        <Switch>

          <Route exact path="/" render={() => <CharacterList
            potterList={potterList}
            handleNameFilter={this.handleNameFilter}
            filterName={filterName}
            />
          } />
          <Route path="/detail/:id" render={(takeParams) => <CharacterCard      params={takeParams}
            potterList={potterList}
            resetFilters={this.resetFilters}
            /> }
          />

        </Switch>
      </div>
    )
  }
}

export default App;
