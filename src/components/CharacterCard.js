import React from 'react';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  componentWillMount() {
    this.props.resetFilters();
  }

  render() {
    const { potterList } = this.props;
    const potterid = this.props.match.params.id;
    const potte = potterList[potterid];
  

    return(
      <React.Fragment>

        <div className="card">
          <h2 className="name_card">{potte.name}</h2>
          <img className="image__card" style={{ backgroundImage: `url(${potte.image})`}} alt={potte.name} />
          <h3 className="house">{potte.house}</h3>
        </div>
        <Link to="/">Volver</Link>

      </React.Fragment>
    )
  }
}

export default CharacterCard;
