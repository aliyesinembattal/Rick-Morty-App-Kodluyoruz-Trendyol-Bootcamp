import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/_CharCard.scss';

const CharCard = (props) => {
  return (
    <>
      <Link to={`/char/${props.id}`}>
        <li className="card">
          <img src={props.img} alt={props.name} className="card__img" />
          <main className="card__info">
            <h3 className="card__info--name">{props.name}</h3>
            <p>
              <b>Species:</b> <span>{props.species}</span>
            </p>
            <p>
              <b>Gender:</b> <span>{props.gender}</span>
            </p>
            <p>
              <b>Status:</b> <span>{props.status}</span>
            </p>
            <p>
              <b>Location:</b> <span>{props.location && props.location.name}</span>
            </p>
            <p>
              <b>Origin:</b> <span>{props.origin}</span>
            </p>
          </main>
        </li>
      </Link>
    </>
  );
};

CharCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  location: PropTypes.string,
  origin: PropTypes.object,
};

export default CharCard;
