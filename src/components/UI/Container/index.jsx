import React from 'react';
import classes from './Container.module.scss';

const Container = ({ title, children }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.galleryHeading}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
