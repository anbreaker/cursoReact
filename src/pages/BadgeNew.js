import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

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
            <div className='col-6'>
              <Badge
                nick='anbreaker'
                web='rootdevs.es'
                avatarUrl='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
                jobTitle='Student Frontend'
                twitter='antunez19'
              />
            </div>
            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
