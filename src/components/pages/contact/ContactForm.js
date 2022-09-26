import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";
import { useState } from "react";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import { SuccessMessage } from "../../common.styles/DisplayMessages";
import ContactDetails from "./ContactDetails";

const Grid = styled.div`
  @media ${({ theme }) => theme.devices.tabletS} { 
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

`;

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

  firstName: yup.string().required("Please enter your first name").min(1, "Your name must be at least one character"),
  lastName: yup.string().required("Please enter your last name").min(1, "Your name must be at least one character"),
  email: yup.string().required("Please enter a email adress").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

const ContactForm = () => {
  const [contactSuccess, setContactSuccess] = useState(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const addNewContact = async (data) => {
    setContactSuccess(null);
    try {
      const addedContact = await postRequest(`${BASE_URL}/api/contacts`, { data });
      console.log(addedContact);
      setContactSuccess("Contact form successfully sent!");

    } catch (error) {
      console.log("error", error);
    }
    return false;
  };

  return (
    <Grid>
      <Form onSubmit={handleSubmit(addNewContact)}>
        <Flex>
          <Label htmlFor="firstName">First name</Label>
          <Input {...register("firstName")} placeholder="First name" />
          {errors.firstName && <Span>{errors.firstName.message}</Span>}

          <Label htmlFor="lastname">Last name</Label>
          <Input {...register("lastName")} />
          {errors.lastName && <Span>{errors.lastName.message}</Span>}

          <Label htmlFor="email"> Email</Label>
          <Input {...register("email")} />
          {errors.email && <Span>{errors.email.message}</Span>}

          <Label htmlFor="message">Message</Label>
          <Textarea rows="7"{...register("message")} />
          {errors.message && <Span>{errors.message.message}</Span>}
        </Flex>
        <StyledButton text="Send" />
        {contactSuccess && <SuccessMessage>{contactSuccess}</SuccessMessage>}
      </Form>
      <ContactDetails />
    </Grid>
  )
}

export default ContactForm;