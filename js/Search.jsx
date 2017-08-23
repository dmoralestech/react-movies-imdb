import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({searchTerm: event.target.value});
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows.filter(
              show =>
              `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: PropTypes.shape([])
}

Search.defaultProps = {
  shows: []
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
