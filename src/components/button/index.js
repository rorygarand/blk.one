import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { styles } from '../../utils';

const Button = ({ disabled, title, onClick }) => {
  const handleClick = !disabled ? onClick : () => {};

  return (
    <Wrapper disabled={disabled} onClick={handleClick}>
      {title}
    </Wrapper>
  );
};

Button.defaultProps = {
  disabled: false,
  title: '',
  onClick: () => {}
};

Button.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;

const Wrapper = styled.button`
  border-radius: 4px;
  box-shadow: rgba(30, 22, 54, 0.1) 0 0px 0px 0px inset;
  color: rgba(30, 22, 54, 0.6);
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  display: block;
  margin: 8px 0;
  padding: 0 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);

  &:disabled {
    color: ${styles.lightGrey};
  }

  &:focus {
    outline: 0;
  }

  &:hover:enabled {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: ${styles.purple} 0 0px 0px 40px inset;
  }
`;
