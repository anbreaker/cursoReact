import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import md5 from 'md5';

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

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        avatarUrl: `https://www.gravatar.com/avatar/${md5(
          this.state.form.email
        )}?d=identicon`,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading: true, error: null});

    try {
      await api.badges.create(this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='BadgeNew__hero-image img-fluid' src={header} alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.web || 'Last Name'}
                avatarUrl={
                  this.state.form.avatarUrl ||
                  'https://s.gravatar.com/avatar/315358dc3891fc64420dd02b9faf0287?s=80'
                }
                jobTitle={this.state.form.jobTitle || 'JobTitle'}
                email={this.state.form.email || 'eMail'}
                twitter={this.state.form.twitter || 'Twitter'}
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
