import React from 'react';

class Filters extends React.Component {
  render() {
    const { filterName, handleNameFilter } = this.props;
    return (

      <input type="text" value={filterName}  onChange={handleNameFilter}/>
    )
  }
}

export default Filters;
