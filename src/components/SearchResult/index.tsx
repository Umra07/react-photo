import { FC, useEffect, useRef } from 'react';
import {
  pageChanged,
  selectLoadingStatus,
  selectPage,
  selectSearchQuery,
  selectSearchResult,
} from '../../redux/slices/photosSlice';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { searchPhotos } from '../../redux/async';
import Gallery from '../UI/Gallery';
import Container from '../UI/Container';
import classes from './SearchResult.module.scss';

const SearchResult: FC = () => {
  const query = useSelector(selectSearchQuery);
  const page = useSelector(selectPage);
  const searchResult = useSelector(selectSearchResult);
  const status = useSelector(selectLoadingStatus);

  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      threshold: 0.1,
    },
    false,
  );

  useEffect(() => {
    if (isIntersecting && searchResult.total !== searchResult.results.length) {
      dispatch(searchPhotos({ page: page + 1, query }));
      dispatch(pageChanged(page + 1));
    }
  }, [query, dispatch, isIntersecting]);

  return (
    <Container>
      <h2 className="heading">SEARCH RESULT</h2>
      <p className={classes['search-result']}>Photos found: {searchResult.total}</p>
      <Gallery photos={searchResult.results} observerRef={ref} status={status} />
    </Container>
  );
};

export default SearchResult;
