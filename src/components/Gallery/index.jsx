import React, { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem.jsx';
import Container from '../UI/Container';
import GalleryButton from '../UI/GalleryButton';
import classes from './Gallery.module.scss';
import axios from 'axios';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotosPage, setCurrentPhotosPage] = useState(1);

  const fetchPhotos = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/?page=${currentPhotosPage}&per_page=6&client_id=STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U`,
      );
      setPhotos([...photos, ...data]);
    } catch (error) {
      const status = error.toJSON().status;
      console.log(status);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [currentPhotosPage]);

  const loadPhotosHandler = () => {
    setCurrentPhotosPage((prevPage) => prevPage + 1);
  };

  return (
    <Container title={'EXPLORE MOST POPULAR UPLOADS'}>
      <ul className={classes.galleryList}>
        {photos.map((photo, i) => (
          <GalleryItem
            key={i}
            id={photo.id}
            avatar={photo.user.profile_image.large}
            imgURL={photo.urls.regular}
            likes={photo.likes}
            date={photo.created_at.slice(0, 10)}
            name={
              photo.user.first_name +
              (photo.user.last__name === 'null' ? '' : ` ${photo.user.last_name}`)
            }
            username={photo.user.instagram_username}
          />
        ))}
      </ul>
      <GalleryButton onClick={loadPhotosHandler} />
    </Container>
  );
};

export default Gallery;
