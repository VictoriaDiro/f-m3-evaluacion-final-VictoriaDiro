import React from 'react';
import PropTypes from 'prop-types';
import './Filters.css'

class Filters extends React.Component {
  render() {
    const { filterName, handleNameFilter } = this.props;
    return (
      <div className="filter__container">
        <label htmlfor="search" className="search__label">Busca tu personaje</label>
        <input className="search__input" type="text" name="search" id="search"
        value={filterName}
        onChange={handleNameFilter}
        />
      </div>
    )
  }
}

Filters.propTypes = {
  filterName: PropTypes.string,
  handleNameFilter: PropTypes.func
}

export default Filters;
