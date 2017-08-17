import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props) => (
  <Wrapper to={`/details/${this.props.imdbID}`}>
    <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
}

ShowCard.defaultProps = {
  title: '',
  poster: '',
  description: '',
  year: '',
}

export default ShowCard;
