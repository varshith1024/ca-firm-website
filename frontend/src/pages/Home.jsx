import React from 'react';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesGrid />
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;