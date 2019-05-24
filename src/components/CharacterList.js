import React from 'react';
import { Link } from 'react-router-dom';

class characterList extends React.Component {

  paintPotterList() {
    const {potterList, filterName} = this.props;
      return potterList
        .filter(item => item.name.toUpperCase().toLowerCase().includes(filterName))
        .map((item, index) => {
          return (
            <li className="potterListItem" key={item.id}>
            <Link to={`/characterCard/${item.id}`}>{item.name}</Link>
          </li>
          )
        })
  }

  render() {

    const { handleNameFilter } = this.props;



    return (
      <div className="listContainer">
        <input type="text" onChange={handleNameFilter} />
        <ul className="popotterList">
          {this.paintPotterList()}
        </ul>
      </div>
    )
  }
}

export default characterList;
