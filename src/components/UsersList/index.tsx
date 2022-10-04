import React, { useEffect, useState } from 'react';
import ArtistCard from './ArtistCard';
import Container from '../UI/Container';
import GalleryButton from '../UI/GalleryButton';
import classes from './UsersList.module.scss';
import axios from 'axios';
import { IUser } from '../../@types/data';

const UsersList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUsersPage, setCurrentUsersPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`https://api.unsplash.com/photos/?page=${currentUsersPage}&per_page=4&client_id=STdsYhvvu_8oWLgrHOodAi_0-Dnb0vW-wVcdLMU1l4U`
      )
      console.log(data.user.profile_image.large)

      const newUsers: IUser[] = data.map((user: any): IUser => ({
          avatar: user.profile_image.large,
          name: user.first_name,
          username: user.instagram_username,
          bio: user.bio,
          total: user.total_photos
      }))
      
      setUsers([...users, ...newUsers]);
      console.log(newUsers)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentUsersPage]);

  const loadPhotosHandler = () => {
    setCurrentUsersPage((prevPage) => prevPage + 1);
  };

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
          />
        ))}
      </ul>
      <GalleryButton onClick={loadPhotosHandler} />
    </Container>
  );
};

export default UsersList;
