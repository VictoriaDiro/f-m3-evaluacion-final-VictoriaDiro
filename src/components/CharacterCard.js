import React from 'react';
import { Link } from 'react-router-dom';

class characterCard extends React.Component {
  componentWillMount() {
    this.props.resetFilters();
  }

  render() {
    const {potterList} = this.props;
    const potterid = this.props.params.match.params.id;

    const potte = potterList.find(item => item.id === potterid);

    return(
      <React.Fragment>

          <div className="card">
            <h2 className="potterName">{potte.name}</h2>
            <img src={potte.image} alt={potte.name} />
          </div>

          <Link to="/">Volver</Link>

      </React.Fragment>
    )
  }
}

export default characterCard;
