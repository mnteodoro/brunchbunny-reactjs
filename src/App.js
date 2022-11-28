import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  return (
    <div className='bg-gradient-to-r from-yellow-500 to-amber-500'>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
    </div>
  );
}

export default App;
