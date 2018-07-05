import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Header } from '../../components';

import banner from '../../images/banner.jpg';
import { styles } from '../../utils';

class Main extends Component {
  render() {
    return (
      <View id="main">
        <Header name="EOS User" />
        <Content>
          <Wrapper>
            <Row>
              <span>most recent blocks</span>
              <Button title="load" />
            </Row>
          </Wrapper>
        </Content>
      </View>
    );
  }
}

export default Main;

const Content = styled.section`
  align-items: center;
  bottom: 0;
  display: flex;
  position: absolute;
  overflow: auto;
  justify-content: center;
  top: ${styles.header.outerHeight - 8}px;
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

const Row = styled.div`
  border-bottom: 1px solid ${styles.almostWhite};
  display: flex;
  flex-direction: row;
  height: ${styles.row.height}px;
  justify-content: space-between;
  line-height: ${styles.row.height}px;
  padding: 0 8px;
  text-transform: uppercase;
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
  box-shadow: ${styles.lightGrey} 0px 0px 1px 0px;
  flex: 0.7;
  min-height: 80%;
`;
