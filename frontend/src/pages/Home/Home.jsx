import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
