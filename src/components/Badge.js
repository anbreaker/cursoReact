import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>

        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
            alt='Avatar'
          />
          <h1>
            anbreaker <br /> <a href='https://rootdevs.es/'>rootdevs.es</a>
          </h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Student Frontend</h3>
          <div>@anbreaker</div>
        </div>
        <div className='Badge__footer'>#platziConf</div>
      </div>
    );
  }
}

export default Badge;
