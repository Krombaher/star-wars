import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { RootRouter } from './RootRouter.tsx';
import { AppContainer } from './AppContainer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppContainer>
      <RouterProvider router={RootRouter} />
    </AppContainer>
  </Provider>,
);
