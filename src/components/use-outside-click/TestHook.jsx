import React from 'react';
import { useState } from 'react';
import './styles.css';

export const TestHook = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className='container'>
      {showContent ? (
        <div>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem vel sint quia! Nihil minus, tempora voluptas mollitia
            quis commodi quod veniam sunt possimus, culpa amet excepturi.
            Molestiae dolorem vero eligendi.
          </p>
          <p>Click Outside To Hide Content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};
