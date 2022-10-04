import React from 'react';
import { IUser } from '../../../@types/data';
import classes from './ArtistCard.module.scss';

const ArtistCard: React.FC<IUser> = ({ avatar, bio, name, username, total }) => {
  return (
    <li className={classes.card}>
      <div className={classes.cardTop}>
        <img className={classes.avatar} src={avatar} alt="Artist avatar" />
        <ul>
          <li>
            <img src="img/man-icon.svg" alt="Icon of number people" />
            <b>1.3K</b>
          </li>
          <li>
            <img src="img/photo-icon.svg" alt="Icon of number people" />
            <b>{total}</b>
          </li>
          <li>
            <img src="img/facebook.svg" alt="Facebook icon" />
            <b>{`@${username}`}</b>
          </li>
        </ul>
      </div>
      <div className={classes.info}>
        <h3>{name}</h3>
        <small>{`@${username}`}</small>
        <p>{bio}</p>
      </div>
      <button>Learn more</button>
    </li>
  );
};

export default ArtistCard;
