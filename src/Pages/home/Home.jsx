import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Popular from './popular.jsx/Popular';
import './style.scss'
import TopRated from './topRated/TopRated';
import Trending from './trending/Trending';
HeroBanner;
const Home = () => {
  return (
    <>
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
    
    </>
    
  )
}

export default Home
