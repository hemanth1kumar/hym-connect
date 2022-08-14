import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props): JSX.Element => {
  const isLoggedIn = false;
  const curPagePath = useLocation().pathname;

  if (!isLoggedIn) {
    return <Navigate to={`/login?location=${curPagePath}`} />;
  }

  return children;
};

export default PrivateRoute;
