import { FC } from 'react';
import classes from './GalleryItemSkeleton.module.scss';

export const GalleryItemSkeleton: FC = () => {
  return (
    <div className={classes.skeleton}>
      <div className={classes.top} />
      <div className={classes.bottom}>
        <span className={classes['image-skeleton']} />
        <span className={classes['text-skeleton']} />
      </div>
    </div>
  );
};
