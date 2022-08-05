import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

const Signup = React.lazy(() => import('./pages/Signup'));

const AppRoutes = {
  Signup: {
    path: '/signup',
    component: Signup,
  },
  Login: {
    path: '/login',
    component: Login,
  },
};

const App = (): JSX.Element => (
  <>
    <h5>Hymconnect</h5>
    <Routes>
      {Object.entries(AppRoutes).map((entry) => {
        const [label, route] = entry;
        const RouteComponent = route.component;
        return (
          <Route path={route.path} key={label} element={<RouteComponent />} />
        );
      })}
    </Routes>
  </>
);
export default App;
