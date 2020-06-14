import React from 'react';

import './styles/Home.css';
import conf from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='Home'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 Home__col'>
                <img src={conf} alt='conf' />
              </div>

              <div className='col-6 Home__col'>
                <img src={astronauts} alt='astronauts' />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
