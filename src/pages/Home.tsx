import React from 'react';
import Ad from '../components/Ad';
import Gallery from '../components/Gallery';
import UsersList from '../components/UsersList';



const Home: React.FC = () => {
  return (
    <>
      <Gallery />
      <Ad />
      <UsersList />
    </>
  )
}

export default Home