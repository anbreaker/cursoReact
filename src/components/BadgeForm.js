import React from 'react';

class BadgeForm extends React.Component {
  state = {
    // jobTitle: 'Designer',
  };

  handleChange = (eKey) => {
    // console.log({
    //   name: eKey.target.name,
    //   value: eKey.target.value,
    // });

    this.setState({
      [eKey.target.name]: eKey.target.value,
    });
  };

  handleClick = (eMouse) => {
    console.log('Button was clicked');
  };

  handleSubmit = (event) => {
    // Not send form
    event.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Firts Name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.state.firstName}
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.state.lastName}
            />
          </div>
          <div className='form-group'>
            <label>eMail</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='email'
              name='email'
              value={this.state.email}
            />
          </div>
          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.state.jobTitle}
            />
          </div>
          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
