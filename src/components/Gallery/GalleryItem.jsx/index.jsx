import React, { useState } from 'react';
import ModalImage from '../../UI/ModalImage';
import classes from './GalleryItem.module.scss';

const GalleryItem = ({ id, avatar, imgURL, likes, date, name, username }) => {
  const [numOfLikes, setNumOfLikes] = useState(likes);

  const likePhoto = () => {
    if (likes + 1 !== numOfLikes) {
      setNumOfLikes((prevLikes) => prevLikes + 1);
    } else {
      setNumOfLikes((prevLikes) => prevLikes - 1);
    }
  };

  const price = Math.round(Math.random() * 31);

  return (
    <li className={classes.photoBlock}>
      <div className={classes.img_block}>
        <img className={classes.img} src={imgURL} alt="Random" />
        <div className={classes.overlay}>
          <div className={classes.overlay_info}>
            <b>{`Price: ${price}$`}</b>
            <b>{'Upload date: ' + date}</b>
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className={classes.author}>
        <div className={classes.authorInfo}>
          <img src={avatar} alt="Author avatar" />
          <div className={classes.name}>
            <b>{name}</b>
            <small>{`@${username}`}</small>
          </div>
        </div>
        <div className={classes.likes}>
          <span>{numOfLikes}</span>
          <svg
            className={likes !== numOfLikes ? classes.active : ''}
            onClick={likePhoto}
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.75859 1C3.333 1 1.36658 3.00868 1.36658 5.4864C1.36658 9.97279 6.55714 14.0513 9.35206 15C12.147 14.0513 17.3375 9.97279 17.3375 5.4864C17.3375 3.00868 15.3711 1 12.9455 1C11.4602 1 10.1466 1.75331 9.35206 2.90631C8.94707 2.31705 8.40904 1.83614 7.78352 1.50431C7.15801 1.17248 6.46343 0.999492 5.75859 1Z"
              stroke="#675656"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default GalleryItem;
