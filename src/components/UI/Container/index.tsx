import React from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
