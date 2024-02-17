export interface Photo {
  id: number;
  name: string;
  imgURL: string;
  likes: number;
  date: string;
  avatar: string;
  username: string;
  bio: string;
  total: number;
}

export type SearchResponseType = { results: Photo[]; total_pages: number; total: number };

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchResultType = {
  total: number;
  total_pages: number;
  results: Photo[];
};

export interface InitialStateType {
  photos: Photo[];
  page: number;
  status: Status;
  searchQuery: string;
  searchResult: SearchResultType;
}
