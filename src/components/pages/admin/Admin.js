import { useContext, useEffect } from "react";
import AuthContext from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <h1>Admin</h1>
  )
}

export default Admin;