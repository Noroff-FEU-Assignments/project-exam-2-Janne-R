import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const Ul = styled.ul`
  display: ${(props) => props.menu ? "flex" : "none"};
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <NavLink to="/">
        Logo
      </NavLink>
      <nav>
        <BurgerMenu aria-label="Open the menu" aria-hidden="true" color="black" size="2rem" onClick={() => setShowMenu(!showMenu)} />
        <Ul menu={showMenu}>
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
    </>
  )
}

export default Navigation;