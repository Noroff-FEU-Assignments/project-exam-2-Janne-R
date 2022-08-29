import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Flex = styled.div`
  display:flex;
  justify-content: space-between;
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const Ul = styled.ul`
  display: ${(props) => props.showMenu ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  flex-direction: column;
  list-style-type: none;
  position: absolute;
  right: 0;
  width: 100%;
  align-items: center;
  a{
    text-decoration: none;
    text-transform: uppercase;
  }
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = () => {
  const [toogleShowMenu, setToogleShowMenu] = useState(false);
  return (
    <Flex>
      <NavLink to="/">
        Logo
      </NavLink>
      <nav>
        <BurgerMenu aria-label="Open the menu" aria-hidden="true" color="black" size="2rem" onClick={() => setToogleShowMenu(!toogleShowMenu)} />
        <Ul showMenu={toogleShowMenu}>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels">
              Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              Login
            </NavLink>
          </li>
        </Ul>
      </nav>
    </Flex>
  )
}

export default Navigation;