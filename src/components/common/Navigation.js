import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    border-top: 3px solid  ${({ theme }) => theme.colors.primaryColor};;
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
    color: ${({ theme }) => theme.colors.textColorDark};
  }
  li{
    margin-bottom: 20px;
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
            <StyledNavLink to="/">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/hotels">
              Hotels
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact">
              Contact
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/login">
              Login
            </StyledNavLink>
          </li>
        </Ul>
      </nav>
    </Flex>
  )
}

export default Navigation;