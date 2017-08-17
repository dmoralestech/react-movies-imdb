import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import setSearchTerm from './actionCreators';

const Landing = (props) => (
  <div className="landing">
    <h1>{props.searchTerm}</h1>
    <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search"/>
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({searchTerm: state.searchTerm});
const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

Landing.propTypes = {
  searchTerm: PropTypes.string,
  handleSearchTermChange: PropTypes.func
};

Landing.defaultProps = {
  searchTerm: '',
  handleSearchTermChange: function noop() {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
