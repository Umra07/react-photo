import { FC, RefObject, forwardRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Photo, Status } from '../../../redux/types';
import { GalleryItemSkeleton } from './GalleryItemSkeleton';
import GalleryItem from './GalleryItem';
import Modal from './Modal';
import classes from './Gallery.module.scss';

interface GalleryProps {
  photos: Photo[];
  observerRef?: RefObject<HTMLDivElement>;
  status: string;
}

const Gallery: FC<GalleryProps> = forwardRef(({ photos, observerRef, status }) => {
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const showImageModal = (img: string) => {
    setPhoto(img);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div>
      {showModal &&
        createPortal(
          <Modal photo={photo} setShowModal={setShowModal} />,
          document.getElementById('modal')!,
        )}

      {status === Status.ERROR ? (
        'THIS IS ERROR!!!!!!!'
      ) : (
        <ul className={classes.galleryList}>
          {photos.map((photo, i) => (
            <GalleryItem
              key={i}
              id={photo.id}
              avatar={photo.avatar}
              imgURL={photo.imgURL}
              likes={photo.likes}
              date={photo.date}
              name={photo.name}
              username={photo.username}
              showModal={showImageModal}
            />
          ))}
          {status === Status.LOADING ? (
            <>
              {[1, 2, 3, 4, 5, 6].map((skeleton) => (
                <GalleryItemSkeleton key={skeleton} />
              ))}
            </>
          ) : (
            ''
          )}
        </ul>
      )}

      <div className={classes.observer} ref={observerRef}>
        <p>Load more</p>
      </div>
    </div>
  );
});

export default Gallery;
