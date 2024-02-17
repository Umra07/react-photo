import { FC } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.46565 18.7037H18.4466L12.9809 13.2826L-5.72205e-06 13.2826L5.46565 18.7037ZM12.9809 13.2826L12.9809 0.407406L18.4466 5.82853V18.7037L12.9809 13.2826Z"
            fill="#FF4646"
          />
        </svg>
        <h2>Gallery</h2>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
