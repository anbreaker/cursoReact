import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo' />
        </div>

        <div className='contar'>
          <div className='row'>
            <div className='col'>
              <Badge
                nick='anbreaker'
                web='rootdevs.es'
                avatarUrl='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
                jobTitle='Student Frontend'
                twitter='antunez19'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
