import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    //you set it uop this way so it doenst rely on the subject change, it relies on the event being passed as a varible passed on where it occured
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    //arrow funciton makes it so I do not have to bind in the form setup
    e.preventDefault();
    //you must do this prevent default otherwise itll try to submit to a file
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      //must be passwe up to app.js
      //state is passed in to the searchUsers function
      setText('');
    }
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          //input field will be available for
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
  //justCarl: PropTypes.func.isRequired,
};

export default Search;
