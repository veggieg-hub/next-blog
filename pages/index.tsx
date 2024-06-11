// pages/index.js

import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('Home page loaded.');
  }, []);

  return (
    <div>
      <h1>Welcome to the Winter page</h1>
    </div>
  );
};

export default Home;
