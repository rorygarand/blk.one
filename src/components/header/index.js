import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import eos from '../../images/eos.svg';

import { styles } from '../../utils';

const Header = ({ name }) => (
  <Section id="header">
    <Div>
      <img src={eos} alt="logo" />
      {name}
    </Div>
  </Section>
);

Header.defaultProps = {
  name: ''
};

Header.propTypes = {
  name: PropTypes.string
};

export default Header;

const Div = styled.div`
  color: ${styles.darkGrey};
  display: flex;
  height: ${styles.header.innerHeight}px;
  justify-content: space-between;
  line-height: ${styles.header.innerHeight}px;
  max-width: 1170px;
  padding: 0 15px;
  text-transform: uppercase;
  width: 100%;
`;

const Section = styled.section`
  align-items: center;
  border-bottom: 1px solid ${styles.lightGrey};
  display: flex;
  height: ${styles.header.outerHeight}px;
  justify-content: center;
  margin: -8px;
  padding: 8px;
  width: 100%;
`;
