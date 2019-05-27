import React from 'react';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import Filters from './components/Filters';
import HarryPotterLogo from './images/HarryPotterLogo.png';
import { FetchPotter } from './services/FetchPotter';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      potterList: [],
      filterName: ''
    };
    this.getPotter = this.getPotter.bind(this);
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
    const contentFilter = event.currentTarget.value;

    this.setState({
      filterName: contentFilter
    })
  }

  render() {
    const { potterList, filterName } = this.state;
    return (

      <div className="App">

        <div className="logo__container">
          <img className="image__header" src={HarryPotterLogo} alt="Harry Potter Logo" />
          </div>

        <Switch>

          <Route exact path="/" render={() =>
          <div className="filter__list-container">
            <Filters
              value={filterName}
              handleNameFilter={this.handleNameFilter}
            >
            </Filters>

            <CharacterList
              potterList={potterList}
              handleNameFilter={this.handleNameFilter}
              filterName={filterName}
            />
            </div>
          } />

          <Route
            path="/character/:id" render={props =>
            <CharacterCard match={props.match}
              potterList={potterList}
              resetFilters={this.resetFilters}
            /> }
          />

        </Switch>
        <footer>
          <p>Make with <i class="fas fa-heart"></i> by Victoria Diro</p>
        </footer>
      </div>
    )
  }
}

export default App;
