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
          <img className="image__card" style={{ backgroundImage: `url(${potte.image})`}} alt={potte.name} />
          <div className="info__container">
            <h2 className="name__card">{potte.name}</h2>
            <h3 className="house__card">{`Casa: ${potte.house}`}</h3>
            <h3 className="year__card">{`Año de nacimiento: ${potte.yearOfBirth}`}</h3>
            <h3 className="patronus__card">{`Patronus: ${potte.patronus}`}</h3>
            <h3 className="state__card">Estado: {potte.alive ? <i class="fas fa-heartbeat"></i> : <i class="fas fa-skull"></i>}</h3>
          </div>
        </div>
        <Link to="/" className="return__link">Volver</Link>

      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  potterList: PropTypes.arrayOf(PropTypes.object),
  potterid: PropTypes.string
}

export default CharacterCard;
