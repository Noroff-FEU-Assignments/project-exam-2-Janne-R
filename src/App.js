import { ThemeProvider } from "styled-components";
import theme from "./components/layout/theme";
import GlobalStyle from "./components/layout/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Hotels from "./components/pages/hotels/Hotels";
import Details from "./components/pages/details/Details";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Wrapper from "./components/common.styles/Wrapper";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/hotels" exact element={<Hotels />} />
              <Route path="/details/:id" exact element={<Details />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
          </Wrapper>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;