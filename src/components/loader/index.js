import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import loader from '../../images/loader.gif';

const Loader = props => (
  <Wrapper {...props} id="loader" src={loader} alt="loader" />
);

Loader.defaultProps = {
  size: 150
};

Loader.propTypes = {
  size: PropTypes.number
};

export default Loader;

const Wrapper = styled.img`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;
