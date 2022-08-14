import React from 'react';

import Home from '../pages/Home';
import Login from '../pages/Login';
// import Signup from "../pages/Signup";
const Signup = React.lazy(() => import('../pages/Signup'));

export const AppPrivateRoutes = {
  Dashboard: {
    path: '/home',
    component: Home,
  },
};

export const AppPublicRoutes = {
  Signup: {
    path: '/signup',
    component: Signup,
  },
  Login: {
    path: '/login',
    component: Login,
  },
};
