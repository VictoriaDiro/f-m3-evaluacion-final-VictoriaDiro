import React from 'react';

class Filters extends React.Component {
  render() {
    const { filterName, handleNameFilter } = this.props;
    return (
      <div className="filter__container">
        <h3 className="search__character-label">Busca tu personaje</h3>
        <input className="search__input" type="text" value={filterName}  onChange={handleNameFilter}/>
      </div>
    )
  }
}

export default Filters;
