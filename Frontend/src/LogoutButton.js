import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './store/actions/actions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
