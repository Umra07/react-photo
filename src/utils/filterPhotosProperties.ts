import { Photo } from '../redux/types';

export const filterPhotosProperties = (data: any) => {
  const loadedPhotos: Photo[] = [];

  for (const key in data) {
    loadedPhotos.push({
      id: data[key].id,
      name:
        data[key].user.first_name +
        (data[key].user.last__name ? ` ${data[key].user.last__name}` : ''),
      imgURL: data[key].urls.regular,
      likes: data[key].likes,
      date: data[key].created_at.slice(0, 10),
      avatar: data[key].user.profile_image.large,
      username: data[key].user.instagram_username ? data[key].user.instagram_username : '',
      bio: data[key].user.bio,
      total: data[key].user.total_photos,
    });
  }

  return loadedPhotos;
};
