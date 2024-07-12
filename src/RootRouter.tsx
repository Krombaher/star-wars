import { createBrowserRouter } from 'react-router-dom';
import { CharacterDetails } from './pages/CharacterDetails/CharacterDetails';
import { HomePage } from './pages/HomePage/HomePage';

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/person/:id',
    element: <CharacterDetails />,
  },
]);
