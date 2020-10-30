import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import SinglePokemon from './pages/single-pokemon/SinglePokemon';

const routes = [
  { path: '/', exact: true, component:Home },
  { path: '/home', exact: true, component:Home },
  { path: '/single-pokemon/:name', exact: true, component:SinglePokemon },
];

const AppRouter = () => (
  <BrowserRouter>
    {
      routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
      ))
    }
  </BrowserRouter>
);

export default AppRouter;
