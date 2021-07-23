import PropTypes from 'prop-types';
import '../stylesheets/_CharList.scss';
import CharCard from './CharCard';
import SearchErr from './SearchErr';

const CharList = (props) => {
  if (props.filteredChars.length === 0) {
    return <SearchErr />;
  } else {
    const charItems = props.filteredChars.map((char) => {
      return <CharCard key={char.id} location={props.locations[0]} id={char.id} name={char.name} img={char.img} species={char.species} status={char.status} gender={char.gender} />;
    });
    return <ul className="cardList">{charItems}</ul>;
  }
};

CharList.propTypes = {
  filteredChars: PropTypes.array.isRequired,
};

export default CharList;
