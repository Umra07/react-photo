import { FC, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { fetchPhotos } from '../../redux/async';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectLoadingStatus, selectPhotos } from '../../redux/slices/photosSlice';
import Gallery from '../UI/Gallery';
import Container from '../UI/Container';

export const Main: FC = () => {
  const photos = useSelector(selectPhotos);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const status = useSelector(selectLoadingStatus);
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      threshold: 0.1,
    },
    false,
  );

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchPhotos(page));
      setPage((prevPage) => prevPage + 1);
    }

    if (isIntersecting) {
      dispatch(fetchPhotos(page));
      setPage((prevPage) => prevPage + 1);
    }
  }, [isIntersecting, dispatch]);

  return (
    <Container>
      <h2 className="heading">EXPLORE MOST POPULAR UPLOADS</h2>
      <Gallery photos={photos} status={status} observerRef={ref} />
    </Container>
  );
};
