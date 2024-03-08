import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { PublicRoutes } from './routes/PublicRoutes';

function App()
{
  const appRoutes = useRoutes(PublicRoutes)
  
  return appRoutes
}

export default App;
