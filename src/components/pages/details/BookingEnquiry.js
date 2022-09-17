import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import { SuccessMessage } from "../../common.styles/DisplayMessages";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Flex = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark}; ;
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

const BookingEnquiry = () => {
  let { id } = useParams();

  const [enquirySuccess, setEnquirySuccess] = useState(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const addNewEnquiry = async (data) => {

    const enquiryData = {
      ...data,
      hotel: id,
    };
    console.log(enquiryData);


    setEnquirySuccess(null);
    try {
      const addedEnqury = await postRequest(`${BASE_URL}/api/enquiries`, { data: enquiryData });
      console.log(addedEnqury);
      setEnquirySuccess("Enquiry successfully sent!");

    } catch (error) {
      console.log("error", error);
    }
    return false;
  };

  return (
    <>
      <form onSubmit={handleSubmit(addNewEnquiry)}>
        <Flex>
          <Label htmlFor="firstName">First name</Label>
          <Input {...register("firstName")} />
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
        {enquirySuccess && <SuccessMessage>{enquirySuccess}</SuccessMessage>}
      </form>
    </>
  )
}

export default BookingEnquiry;