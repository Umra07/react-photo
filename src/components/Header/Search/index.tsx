import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { searchPhotos } from '../../../redux/async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';
import {
  pageChanged,
  searchQuerySetted,
  selectSearchQuery,
} from '../../../redux/slices/photosSlice';
import classes from './Search.module.scss';

const Search: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('q') || '');
  const navigate = useNavigate();
  const query = useSelector(selectSearchQuery);
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = () => {
    setSearchQuery('');
    setSearchParams({ q: '' });
    dispatch(pageChanged(1));
    navigate(`/`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery !== query) {
      dispatch(pageChanged(1));
      dispatch(searchQuerySetted(searchQuery));
      setSearchParams({ q: searchQuery });
    }

    dispatch(searchPhotos({ page: 1, query: searchQuery }));
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className={classes.search}>
      <form onSubmit={handleSubmit}>
        <svg
          className={classes.svg}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.385 1.61266C10.2761 2.50486 10.8339 3.676 10.9649 4.93017C11.096 6.18435 10.7924 7.4455 10.105 8.50266C10.225 8.60266 10.325 8.71266 10.465 8.81266C10.665 8.97266 10.935 9.17266 11.275 9.40266C11.615 9.64266 11.835 9.79265 11.935 9.87265C12.355 10.1827 12.665 10.4427 12.875 10.6527C13.195 10.9727 13.475 11.3027 13.715 11.6527C13.965 12.0027 14.155 12.3427 14.305 12.6927C14.445 13.0427 14.515 13.3727 14.485 13.6927C14.465 14.0127 14.345 14.2827 14.125 14.5027C13.905 14.7227 13.635 14.8427 13.315 14.8627C13.005 14.8827 12.665 14.8227 12.325 14.6727C11.975 14.5327 11.625 14.3327 11.285 14.0827C10.935 13.8427 10.605 13.5627 10.285 13.2427C10.075 13.0327 9.815 12.7227 9.515 12.3127C9.415 12.1827 9.265 11.9627 9.045 11.6527C8.825 11.3327 8.645 11.0827 8.485 10.8727C8.325 10.6727 8.195 10.5227 8.045 10.3727C7.00705 10.9161 5.82272 11.1142 4.66442 10.9379C3.50612 10.7616 2.4343 10.2203 1.605 9.39266C-0.535 7.24266 -0.535 3.75266 1.605 1.61266C2.11562 1.10142 2.72201 0.695853 3.38949 0.419141C4.05696 0.142428 4.77244 0 5.495 0C6.21756 0 6.93304 0.142428 7.60051 0.419141C8.26799 0.695853 8.87438 1.10142 9.385 1.61266ZM7.975 7.97266C8.62829 7.31459 8.9949 6.42493 8.9949 5.49765C8.9949 4.57038 8.62829 3.68072 7.975 3.02266C7.65032 2.69702 7.26458 2.43865 6.83987 2.26236C6.41516 2.08607 5.95984 1.99533 5.5 1.99533C5.04016 1.99533 4.58484 2.08607 4.16013 2.26236C3.73542 2.43865 3.34967 2.69702 3.025 3.02266C2.69936 3.34733 2.44099 3.73307 2.2647 4.15778C2.08842 4.58249 1.99767 5.03781 1.99767 5.49765C1.99767 5.9575 2.08842 6.41282 2.2647 6.83753C2.44099 7.26224 2.69936 7.64798 3.025 7.97266C3.34967 8.29829 3.73542 8.55666 4.16013 8.73295C4.58484 8.90924 5.04016 8.99998 5.5 8.99998C5.95984 8.99998 6.41516 8.90924 6.83987 8.73295C7.26458 8.55666 7.65032 8.29829 7.975 7.97266Z"
            fill="#FF4646"
          />
        </svg>

        <input
          className={classes.input}
          value={searchQuery}
          onChange={(e) => handleInputChange(e)}
          id="q"
          type="text"
          placeholder="Search for the desired photo..."
        />
      </form>
      {searchQuery ? (
        <button className={classes.delete} onClick={handleDeleteButtonClick}>
          <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <title />
            <g data-name="1" id="_1">
              <path
                d="M257,461.46c-114,0-206.73-92.74-206.73-206.73S143,48,257,48s206.73,92.74,206.73,206.73S371,461.46,257,461.46ZM257,78C159.55,78,80.27,157.28,80.27,254.73S159.55,431.46,257,431.46s176.73-79.28,176.73-176.73S354.45,78,257,78Z"
                fill="#FF4646"
              />
              <path
                d="M342.92,358a15,15,0,0,1-10.61-4.39L160.47,181.76a15,15,0,1,1,21.21-21.21L353.53,332.4A15,15,0,0,1,342.92,358Z"
                fill="#FF4646"
              />
              <path
                d="M171.07,358a15,15,0,0,1-10.6-25.6L332.31,160.55a15,15,0,0,1,21.22,21.21L181.68,353.61A15,15,0,0,1,171.07,358Z"
                fill="#FF4646"
              />
            </g>
          </svg>
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
