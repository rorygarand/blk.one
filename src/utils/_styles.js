import styled from 'styled-components';

import variables from './_variables';

const Row = styled.div`
  background-color: ${({ odd = false }) =>
    odd ? variables.almostWhite : '#fff'};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')};
  display: flex;
  flex-direction: row;
  height: ${({ height }) => height || variables.row.small}px;
  justify-content: space-between;
  line-height: ${({ height }) => height || variables.row.small}px;
  padding: 0 8px;
  text-transform: uppercase;
`;

export default { Row };
