import { ThemeProvider } from "styled-components";
import theme from "./components/layout/theme";
import GlobalStyle from "./components/layout/GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";
import Hotels from "./components/pages/hotels/Hotels";
import Details from "./components/pages/details/Details";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels" exact element={<Hotels />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </Router>
    </ThemeProvider>


  );
}

export default App;
