import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

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
  showSearch: PropTypes.boolean,
  handleSearchTermChange: PropTypes.func,
  searchTerm: PropTypes.string
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {
  },
  searchTerm: ''
};


const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
