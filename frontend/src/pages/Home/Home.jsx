import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <AppDownload />
    </div>
  );
}

export default Home;
