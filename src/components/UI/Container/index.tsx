import React, { ReactNode } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  title: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.galleryHeading}>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
