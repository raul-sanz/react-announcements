// @flow 
import * as React from 'react';
import logo from  '../../assets/logo_ila.png'
import { Nav,Content,Logo,Title } from "./Components";

/** Definicion de el componente Navbar implementando as definiciones de el archivo './Components' */
const Navbar = props => {
  return (
    <Nav>
      <Content>
        <Logo>
          <img src={logo} width="50px" alt="logo-img" className="rounded"/>
        </Logo>

        <Title>
          ILA OF MEXICO
        </Title>
      </Content>
    </Nav>
  );
};

export default Navbar;/**Exporta por defecto el componente, permitiendo usarlo en otro componente o pagina */