import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  
  @media ${({ theme }) => theme.devices.tabletS} { 
    padding: 10px;
    max-width: 1200px;
    margin: 0px auto;
  }
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: none;
  }
`;

const Ul = styled.ul`
  display: ${(props) => props.showMenu ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  position: absolute;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  right: 0;
  width:100% ;
  
  li {
    margin-bottom:20px;
    margin-top:10px;
  }

  a {
    text-decoration: none;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.textColorDark};
  }

  @media ${({ theme }) => theme.devices.tabletS} { 
    display: flex;
    flex-direction: row;
    position: unset;
    li:not(:last-child) {
    margin-right: 50px;
    }
    li {
    margin-bottom:0;
    margin-top:0;
  }
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    border-top: 3px solid  ${({ theme }) => theme.colors.primaryColor};
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