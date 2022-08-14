import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
import { AppPrivateRoutes, AppPublicRoutes } from './routesConfig';

const AppRoutes = () => (
  <Routes>
    {Object.entries(AppPublicRoutes).map((entry) => {
      const [label, route] = entry;
      const PublicComponent = route.component;
      return (
        <Route
          path={route.path}
          key={label}
          element={
            <PublicRoute>
              <PublicComponent />
            </PublicRoute>
          }
        />
      );
    })}
    {Object.entries(AppPrivateRoutes).map((entry) => {
      const [label, route] = entry;
      const PrivateComponent = route.component;
      return (
        <Route
          path={route.path}
          key={label}
          element={
            <PrivateRoute>
              <PrivateComponent />
            </PrivateRoute>
          }
        />
      );
    })}
    <Route
      path="*"
      element={
        <PrivateRoute>
          <div>404 not found</div>
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
