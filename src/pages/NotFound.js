import React from 'react';

import imgNotFound from '../images/img404.webp';
import startBackground from '../images/stars.svg';
import './styles/NotFound.css';

function NotFound() {
  return (
    <React.Fragment>
      <div className='NotFound__hero'>
        <img className='NotFound__container' src={imgNotFound} alt='imgNotFound' />
        <h1 className='NotFound__container'>404 Not Found</h1>
        <img src={startBackground} alt='Stars' />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
