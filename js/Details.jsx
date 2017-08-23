import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';
import { getAPIDetails } from './actionCreators';




class Details extends Component {

  constructor(props) {
    super(props);
    this.state({
      apiData: {rating: ''}
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then((response) => {
      this.setState({apiData: response.data});
    });
  }

  render() {
    const {title, description, year, poster, trailer} = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`}/>
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  show: PropTypes.shape({
    imdbID: '',
    title: '',
    description: '',
    year: '',
    poster: '',
    trailer: ''
  })
};

Details.defaultProps = {
  show: {
    imdbID: '',
    title: '',
    description: '',
    year: '',
    poster: '',
    trailer: ''
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
