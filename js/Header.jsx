import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search"/>
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.propTypes = {
  showSearch: PropTypes.boolean.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {
  },
  searchTerm: ''
};

export default Header;
