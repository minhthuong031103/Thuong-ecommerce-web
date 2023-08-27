/** @format */

import React from 'react';
import Home from './pages/Home';
import MainNav from './components/layouts/MainNav';

export default function App() {
  return (
    <div className='min-h-screen relative flex flex-col '>
      <MainNav />
      <Home />
    </div>
  );
}
