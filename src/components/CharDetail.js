import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getEpisodesFromAPI from '../services/getEpisodesFromAPI';
import '../stylesheets/_CharDetail.scss';
import BackToListLink from './BackToListLink';
import RouteErr from './RouteErr';
import StatusIcon from './StatusIcon';

const CharDetail = (props) => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    if (props.char && props.char.episodes) {
      const lastFiveEpisodes = props.char.episodes.length > 5 ? props.char.episodes.slice(-5) : props.char.episodes;
      const episodesToString = lastFiveEpisodes.map((x) => x.split('episode/')[1]);
      getEpisodesFromAPI(episodesToString.toString()).then((data) => {
        if (data !== undefined) setEpisodes(data.map((x) => x.name));
        else setEpisodes('Episodes Not found');
      });
    }
  }, []);

  if (props.char === undefined) {
    return (
      <>
        <BackToListLink />
        <RouteErr />
      </>
    );
  } else
    return (
      <>
        <BackToListLink />
        <article className="detail">
          <img src={props.char.img} alt={props.char.name} className="detail__img" />
          <div className="detail__info">
            <h3 className="detail__info__name">{props.char.name}</h3>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Status: </span> {props.char.status} {StatusIcon(props)}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Species: </span> {props.char.species}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Origin: </span> {props.char.origin}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Gender: </span> {props.char.gender}
            </p>
            <p className="detail__info__attribute">
              <span className="detail__info__title">Last 5 episodes: </span> {episodes.toString()}
            </p>
          </div>
        </article>
      </>
    );
};

CharDetail.propTypes = {
  char: PropTypes.object,
  img: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.array,
};

export default CharDetail;
