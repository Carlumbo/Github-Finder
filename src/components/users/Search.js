import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
    //justCarl: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    //you set it uop this way so it doenst rely on the subject change, it relies on the event being passed as a varible passed on where it occured
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    //arrow funciton makes it so I do not have to bind in the form setup
    e.preventDefault();
    //you must do this prevent default otherwise itll try to submit to a file
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      //must be passwe up to app.js
      //state is passed in to the searchUsers function
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            //input field will be available for
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/*
        <button
          className='btn btn-light btn-block'
          onClick={this.props.justCarl}
        >
          Just Carl
        </button>
        */}
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
