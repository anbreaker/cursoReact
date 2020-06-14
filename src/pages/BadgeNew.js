import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = (eKey) => {
    // const nextForm = this.state.form;
    // nextForm[eKey.target.name] = eKey.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [eKey.target.name]: eKey.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo' />
        </div>

        <div className='contar'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                nick={this.state.form.firstName}
                web={this.state.form.web}
                // avatarUrl={this.state.form.avatarUrl}
                avatarUrl='https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
