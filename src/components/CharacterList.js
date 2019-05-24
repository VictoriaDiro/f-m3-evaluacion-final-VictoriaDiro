import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css'

class characterList extends React.Component {

  paintPotterList() {
    const {potterList, filterName} = this.props;
      return potterList
        .filter(item => item.name.toUpperCase().toLowerCase().includes(filterName))
        .map((item, index) => {
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

    // const { handleNameFilter } = this.props;

    return (
      <div className="listContainer">
        {/* <input type="text" onChange={handleNameFilter} /> */}
        <ul className="list__container">
          {this.paintPotterList()}
        </ul>
      </div>
    )
  }
}

export default characterList;
