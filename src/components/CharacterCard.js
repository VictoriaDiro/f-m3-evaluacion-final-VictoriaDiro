import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterCard.css'

class CharacterCard extends React.Component {
  componentWillMount() {
    this.props.resetFilters();
  }

  componentDidMount(){
    console.log(1);
  }

  render() {
    const { potterList } = this.props;

    const potterId = this.props.match.params.id;
    const potterItem = potterList[potterId];

    return(
      <React.Fragment>

        <div className="card">

          {potterList.length < 1 ?
            <p classme="no__results">Sin resultados</p>
            :
            <div className="card__container">
              <div className="image__card" style={{ backgroundImage: `url(${potterItem.image})`}} alt={potterItem.name}
              />

              <div className="info__container">
                <h2 className="name__card">{potterItem.name}</h2>
                <h3 className="house__card">{`Casa: ${potterItem.house}`}</h3>
                <h3 className="year__card">{`Año de nacimiento: ${potterItem.yearOfBirth}`}</h3>
                <h3 className="patronus__card">{`Patronus: ${potterItem.patronus}`}</h3>
                <h3 className="state__card">Estado: {potterItem.alive ? <i className="fas fa-heartbeat"></i> : <i className="fas fa-skull"></i>}</h3>
              </div>
            </div>
          }
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
