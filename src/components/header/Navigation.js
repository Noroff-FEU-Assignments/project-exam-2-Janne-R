import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Section from "../common.styles/Section";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -26px 10px -35px 10px;
`;

const BurgerMenu = styled(FiMenu)`
  @media ${({ theme }) => theme.devices.laptopS} { 
    display: none;
  }
`;

const Ul = styled.ul`
  display: ${({ showMenu }) => showMenu ? "flex" : "none"};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  position: absolute;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  right: 0;
  width:100%;
  margin: 10px 0;
  
  li {
    margin-bottom:20px;
    margin-top:10px;
  }

  a {
    text-decoration: none;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.textColorDark};
  }

  @media ${({ theme }) => theme.devices.laptopS} { 
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
    border-top: 5px solid  ${({ theme }) => theme.colors.primaryColor};
  }
`;

const Navigation = () => {
  const [toogleShowMenu, setToogleShowMenu] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    const dologOut = window.confirm("Are you sure you want to logout?");
    if (dologOut) {
      setAuth(null);
      navigate("/");
    }
  };

  return (
    <Section>
      <Flex>
        <NavLink to="/">
          <img src="/images/logo.png" alt="logo" width="200" aria-label="Go to home page" />
        </NavLink>
        <nav>
          <BurgerMenu aria-label="Open the menu" aria-hidden="true" color="black" size="2rem" onClick={() => setToogleShowMenu(!toogleShowMenu)} />
          <Ul showMenu={toogleShowMenu}>
            <li>
              <StyledNavLink to="/">
                HOME
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/hotels">
                HOTELS
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact">
                CONTACT
              </StyledNavLink>
            </li>
            {auth ? (
              <>
                <li>
                  <StyledNavLink to="/admin">
                    ADMIN
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/login" onClick={logout}>
                    LOGOUT
                  </StyledNavLink>
                </li>
              </>
            ) :
              <li>
                <StyledNavLink to="/login">
                  LOGIN
                </StyledNavLink>
              </li>
            }
          </Ul>
        </nav>
      </Flex>
    </Section>
  )
}

export default Navigation;