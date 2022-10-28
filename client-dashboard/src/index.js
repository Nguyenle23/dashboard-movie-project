import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import {AuthContextProvider} from '../src/context/authContext/AuthContext';
import {MovieContextProvider} from '../src/context/movieContext/MovieContext';
import {ListContextProvider} from '../src/context/listContext/ListContext';
import {UserContextProvider} from '../src/context/userContext/UserContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);

