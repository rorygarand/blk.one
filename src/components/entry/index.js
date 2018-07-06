import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import get from 'lodash/get';

import { styles, variables } from '../../utils';

import { block as blockSchema } from '../../schema/blocks';

class Entry extends Component {
  static propTypes = {
    block: blockSchema.isRequired,
    odd: PropTypes.bool.isRequired
  };

  state = {
    expanded: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    const blockUpdated = this.props.block.id !== nextProps.block.id;
    const clicked = this.state.expanded !== nextState.expanded;

    return blockUpdated || clicked;
  }

  handleClick = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  };

  reducer = (accumulator, transaction) => {
    const actions = get(transaction, `trx.transaction.actions`, []);
    return accumulator + actions.length;
  };

  render() {
    const { block, odd } = this.props;
    const { expanded } = this.state;
    const { Row } = styles;

    const numActions = block.transactions.reduce(this.reducer, 0);

    return (
      <Container onClick={this.handleClick}>
        <Row clickable odd={odd}>
          <Col>{block.id}</Col>
          <Col>{moment(block.timestamp).format('MMMM Do, h:mm:ss a')}</Col>
          <Col>{numActions}</Col>
          <Link>view details</Link>
        </Row>
        {expanded && (
          <Row clickable odd={odd}>
            <Pre>{JSON.stringify(block, null, 2)}</Pre>
          </Row>
        )}
      </Container>
    );
  }
}

export default Entry;

const Col = styled.div`
  padding: 0 10px;
  text-transform: initial;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = Col.extend`
  color: ${variables.blue};
`;

const Pre = styled.pre`
  line-height: ${variables.row.small - 10}px;
  margin: 13px auto;
  max-width: 950px;
  text-transform: initial;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
