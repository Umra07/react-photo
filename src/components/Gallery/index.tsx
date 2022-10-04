import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import GalleryItem from './GalleryItem';
import Container from '../UI/Container';
import GalleryButton from '../UI/GalleryButton';

import classes from './Gallery.module.scss';

import { useAppDispatch } from '../../redux/store';
import { fetchPhotos, selectPhotos } from '../../redux/slices/photosSlice';
import { useSelector } from 'react-redux';
import Modal from '../UI/Modal';

const Gallery: React.FC = () => {
  const [currentPhotosPage, setCurrentPhotosPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const dispatch = useAppDispatch();

  const photos = useSelector(selectPhotos);

  useEffect(() => {
    dispatch(fetchPhotos(currentPhotosPage))
  }, [currentPhotosPage]);

  const loadPhotosHandler = () => {
    setCurrentPhotosPage((prevPage) => prevPage + 1);
  };

  const showImageModal = (img: string) => {
    setPhoto(img);
    setShowModal(true);
    document.body.style.overflow = 'hidden'
  }

  return (
    <Container title={'EXPLORE MOST POPULAR UPLOADS'}>
      {showModal && ReactDOM.createPortal(<Modal photo={photo} setShowModal={setShowModal} />, document.getElementById("modal")!)}
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
      </ul>
      <GalleryButton onClick={loadPhotosHandler} />
    </Container>
  );
};

export default Gallery;
