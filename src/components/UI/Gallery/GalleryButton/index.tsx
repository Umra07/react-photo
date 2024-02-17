import { FC } from 'react';
import classes from './GalleryButton.module.scss';

interface GalleryButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

const GalleryButton: FC<GalleryButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.galleryButton}>
      Show more
    </button>
  );
};

export default GalleryButton;
