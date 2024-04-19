import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { Layout } from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import SearchResult from './components/SearchResult';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.scss';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'search',
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <RouterProvider router={router} />
    </SkeletonTheme>
  );
}

export default App;
