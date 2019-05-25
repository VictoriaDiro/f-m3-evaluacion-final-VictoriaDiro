import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterCard.css'

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
          <h2 className="name__card">{potte.name}</h2>
          <img className="image__card" style={{ backgroundImage: `url(${potte.image})`}} alt={potte.name} />
          <h3 className="house__card">{potte.house}</h3>
          <h3 className="year__card">{potte.yearOfBirth}</h3>
          <h3 className="patronus__card">{potte.patronus}</h3>
          <h3 className="state__card">{potte.alive}</h3>
        </div>
        <Link to="/">Volver</Link>

      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  potterList: PropTypes.arrayOf(PropTypes.object),
  potterid: PropTypes.string
}

export default CharacterCard;
