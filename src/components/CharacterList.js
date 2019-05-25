import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterList.css'

class characterList extends React.Component {

  paintPotterList() {
    const {potterList, filterName} = this.props;
      return potterList
        .filter(item => item.name.toUpperCase().toLowerCase().includes(filterName))
        .map(item => {
          return (
            <li className="list__item" key={item.id}>

            <Link to={`/character/${item.id}`}>
            <div className="image__list" style={{ backgroundImage: `url(${item.image})`}} alt={item.name} ></div>

            <h2 className="name__list">{item.name}</h2>
            <h3 className="house__list">{item.house}</h3>
            </Link>
          </li>
          )
        })
  }

  render() {

    return (
      <div className="listContainer">
        <ul className="list__container">
          {this.paintPotterList()}
        </ul>
      </div>
    )
  }
}

characterList.propTypes = {
  potterList: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string
}

export default characterList;
