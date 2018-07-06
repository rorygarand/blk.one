import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Entry, Header, Loader } from '../../components';
import { styles, variables } from '../../utils';

import { getBlocks } from '../../actions/block';

import { blocks as blocksSchema } from '../../schema/blocks';
import {
  blocksSelector,
  blockErrorSelector,
  blockLoadingSelector
} from '../../selectors/block';

import banner from '../../images/banner.jpg';

class Main extends Component {
  static defaultProps = {
    blocks: [],
    isError: false,
    isLoading: true
  };

  static propTypes = {
    blocks: blocksSchema,
    isError: PropTypes.bool,
    isLoading: PropTypes.bool,
    getBlocks: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBlocks();
  }

  render() {
    const { blocks, isError, isLoading, getBlocks } = this.props;
    const { Row } = styles;

    const isReady = !isError && !isLoading;

    return (
      <View id="main">
        <Header name="EOS User" />
        <Content>
          <Wrapper>
            <Row height={variables.row.large}>
              <span>most recent blocks</span>
              <Button disabled={isLoading} title="load" onClick={getBlocks} />
            </Row>
            {isLoading && (
              <Center>
                <Loader />loading
              </Center>
            )}
            {isError && (
              <Center>Error retrieving blocks. Please try again later.</Center>
            )}
            {isReady && (
              <div>
                {blocks.map((block, i) => (
                  <Entry key={block.id} block={block} odd={i % 2 === 0} />
                ))}
              </div>
            )}
          </Wrapper>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  blocks: blocksSelector(state),
  isError: blockErrorSelector(state),
  isLoading: blockLoadingSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBlocks
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

const Center = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: ${variables.row.large - 20}px;
`;

const Content = styled.section`
  align-items: flex-start;
  bottom: 0;
  display: flex;
  padding-top: 30px;
  position: absolute;
  overflow: auto;
  justify-content: center;
  top: ${variables.header.outerHeight - 8}px;
  width: 100%;

  &::-webkit-scrollbar {
    margin-right: 5px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(144, 164, 174, 0.1);
    border-radius: 10px;
    margin-top: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(144, 164, 174, 0.3);
    border-radius: 10px;
    margin: 4px;
    -webkit-transition: background-color 200ms ease-in-out;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(144, 164, 174, 0.5);
    border-radius: 10px;
    margin: 4px;
  }
`;

const View = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: Quicksand;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: ${variables.lightGrey} 0px 0px 1px 0px;
  max-width: 1000px;
  min-height: 300px;
  position: relative;
  width: 100%;
`;
