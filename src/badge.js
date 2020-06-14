import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

// Para probar index.js etc...
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName='anbreaker'
    lastName='rootdevs.es'
    avatarUrl='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
    jobTitle='Student Frontend'
    twitter='antunez19'
  />,
  container
);
