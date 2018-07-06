import styled from 'styled-components';

import variables from './_variables';

const Row = styled.div`
  background-color: ${({ odd = false }) => (odd ? '#efefef' : '#fff')};
  border-bottom: 1px solid ${variables.almostWhite};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')};
  display: flex;
  flex-direction: row;
  height: ${({ height }) => height || 30}px;
  justify-content: space-between;
  line-height: ${({ height }) => height || 30}px;
  padding: 0 8px;
  text-transform: uppercase;
`;

export default { Row };
