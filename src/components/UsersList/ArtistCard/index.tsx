import React from 'react';
import classes from './ArtistCard.module.scss';

interface UserProps {
  avatar: string;
  bio: string;
  total: number;
  name: string;
  username: string;
  link: string;
}

const ArtistCard: React.FC<UserProps> = ({ avatar, bio, name, username, total, link }) => {

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
          {username && 
          <li>
            <img src="img/instagram.svg" alt="Facebook icon" />
            <a className={classes['profile-link']} href='https://www.instagram.com/$/'>{`@${username}`}</a>
          </li>}
        </ul>
      </div>
      <div className={classes.info}>
        <h3>{name}</h3>
        {username && <small>{'@' + username}</small>}
        <p>{bio}</p>
      </div>
      <a className={classes.link} href={link}>Learn more</a>
    </li>
  );
};

export default ArtistCard;
