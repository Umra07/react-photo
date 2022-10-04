import React from 'react';
import classes from './GalleryButton.module.scss';

const GalleryButton = ({ ...props }) => {
  return (
    <button {...props} className={classes.galleryButton}>
      Show more
    </button>
  );
};

export default GalleryButton;
