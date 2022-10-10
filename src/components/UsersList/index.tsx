import React, { useEffect, useRef, useState } from 'react';
import ArtistCard from './ArtistCard';
import Container from '../UI/Container';
import GalleryButton from '../UI/GalleryButton';

import classes from './UsersList.module.scss';

import { useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../../redux/slices/usersSlice';
import { useAppDispatch } from '../../redux/store';

const UsersList: React.FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  const effectRan = useRef(false);

  const { users } = useSelector(selectUsers);

  useEffect(() => {
    if(effectRan.current === false) {
      dispatch(fetchUsers(page))
      if(page === 1) {
        return () => {
          effectRan.current = true
        }
      }
    }
    effectRan.current = false;
  }, [page]);

  const loadPhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  console.log('render')

  return (
    <Container title={'EXPLORE MOST POPULAR UPLOADS'}>
      <ul className={classes.artistsList}>
        {users.map((user, i) => (
          <ArtistCard
            key={i}
            avatar={user.avatar}
            name={user.name}
            username={user.username}
            bio={user.bio}
            total={user.total}
            link={user.link}
          />
        ))}
      </ul>
      <GalleryButton onClick={loadPhotos} />
    </Container>
  );
};

export default UsersList;
