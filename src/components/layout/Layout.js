// @flow 
import * as React from 'react';
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import Drawer from '../drawer/Drawer'
import Footer from '../footer/Footer'
import {Col} from '../global/GlobalComponents'

const LayoutContainer = styled.div`height:100%`

const Container = styled.div.attrs({
  className: 'flex bg-gray-300'
})`
  height: calc(100% - 8rem);
`





const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Navbar title="App"/>
      <Container>
        <Col size="1/5" >
          <Drawer/>
        </Col>

        <Col size="4/5" >
          {children}
        </Col>
      </Container>
      <Footer/>
    </LayoutContainer>
  );
};

export default Layout;