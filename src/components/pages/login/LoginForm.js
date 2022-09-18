import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import { ErrorMessage } from "../../common.styles/DisplayMessages";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';

const Form = styled.form`
background-color:${({ theme }) => theme.colors.backgroundColorLight};
padding:10px ;
`;

const Flex = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  padding: 10px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark}; ;
  padding: 10px;
  margin-bottom: 20px;
`;


const Label = styled.label`
   margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  align-self: baseline;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
  margin-bottom: 20px;
  margin-top: -20px;
`;

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});



const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  const onSubmit = async (data) => {
    setLoginError(null);
    try {
      const response = await postRequest(`${BASE_URL}/api/auth/local`, data);
      console.log("heisann", response);
      setAuth(response);
      navigate("/admin");
    } catch (error) {
      setLoginError("Wrong username or password!");
    }
    return false;
  };

  console.log(errors);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          <Label htmlFor="identifier">Username/Email</Label>
          <Input {...register("identifier")} />
          {errors.identifier && <Span>{errors.identifier.message}</Span>}

          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} type="password" />
          {errors.password && <Span>{errors.password.message}</Span>}

        </Flex>
        <StyledButton text="Send" />
      </Form>
    </>
  )
}

export default LoginForm;
