import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>

        <div>
          <img
            src='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
            alt='Avatar'
          />
          <h1>
            anbreaker <br /> development
          </h1>
        </div>

        <div>
          <p>Student Frontend</p>
          <p>@anbreaker</p>
        </div>
        <div>#platziConf</div>
      </div>
    );
  }
}

export default Badge;
