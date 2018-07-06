import styled from 'styled-components';

import variables from './_variables';

const Row = styled.div`
  border-bottom: 1px solid ${variables.almostWhite};
  display: flex;
  flex-direction: row;
  height: ${variables.row.height}px;
  justify-content: space-between;
  line-height: ${variables.row.height}px;
  padding: 0 8px;
  text-transform: uppercase;
`;

export default { Row };
