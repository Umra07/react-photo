import React from 'react';
import Container from '../UI/Container';
import classes from './Ad.module.scss';

const Ad = () => {
  return (
    <div className={classes.ad}>
      <h2 className={classes.adHeading}>START YOUR FREE 1 MONTH TRIAL NOW</h2>
      <p className={classes.adDescr}>Download over a million photos of your choice at half price</p>
    </div>
  );
};

export default Ad;
