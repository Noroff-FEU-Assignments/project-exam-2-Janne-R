import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import { SuccessMessage, ErrorMessage } from "../../common.styles/DisplayMessages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const MyCalandar = styled(Calendar)`
  margin-bottom: 20px;
`;

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

const Select = styled.select`
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
  startDate: yup.date().required("Please enter a start date"),
  endDate: yup.date().required("Please enter an end date"),
});

const BookingEnquiry = () => {
  let { id } = useParams();
  const [enquirySuccess, setEnquirySuccess] = useState(null);
  const [isError, setIsError] = useState(null);

  const { register, handleSubmit, getValues, clearErrors, setValue, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(schema),
  });

  const updateStartDate = date => {
    setValue("startDate", date);
    clearErrors("startDate")
  };

  const updatEndDate = date => {
    setValue("endDate", date);
    clearErrors("endDate")
  };

  const addNewEnquiry = async (data) => {
    const enquiryData = {
      ...data,
      hotel: id,
    };

    setEnquirySuccess(null);
    setIsError(false);
    try {
      await postRequest(`${BASE_URL}/api/enquiries`, { data: enquiryData });
      setEnquirySuccess("Enquiry successfully sent!");

    } catch (error) {
      console.log("error", error);
      setIsError("Sorry, there was an error!")
    }
    return false;
  };

  const startDate = getValues("startDate");
  const endDate = getValues("endDate");

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(addNewEnquiry)}>
        <Flex>

          <Label for="roomType">Choose a room type:</Label>
          <Select name="roomType" id="roomType" {...register("roomType")} >
            <option name="Standard" value="Standard">Standard room</option>
            <option name="Family" value="Family">Family Room</option>
            <option name="Premium" value="Premium">Premium Room</option>
          </Select>

          <Label htmlFor="firstName">First name</Label>
          <Input {...register("firstName")} placeholder="First name" />
          {errors.firstName && <Span>{errors.firstName.message}</Span>}

          <Label htmlFor="lastname">Last name</Label>
          <Input {...register("lastName")} placeholder="Last name" />
          {errors.lastName && <Span>{errors.lastName.message}</Span>}

          <Label htmlFor="email"> Email</Label>
          <Input {...register("email")} placeholder="Email" />
          {errors.email && <Span>{errors.email.message}</Span>}


          <Label htmlFor="startDate"> Start Date:</Label>
          <MyCalandar name="startDate" onChange={updateStartDate} minDate={new Date()} />
          {startDate && <p>Current selected start date is: <b>{moment(startDate).format('MMMM Do YYYY')}</b></p>}
          {errors.startDate && <Span>{errors.startDate.message}</Span>}

          <Label htmlFor="endDate"> End Date:</Label>
          <MyCalandar name="endDate" onChange={updatEndDate} minDate={new Date(startDate)} />
          {endDate && <p>Current selected end date is: <b>{moment(endDate).format('MMMM Do YYYY')}</b></p>}
          {errors.endDate && <Span>{errors.endDate.message}</Span>}

          <Label htmlFor="message">Message</Label>
          <Textarea rows="7"{...register("message")} placeholder="Message" />
          {errors.message && <Span>{errors.message.message}</Span>}

        </Flex>
        <StyledButton text="Send" />
        {enquirySuccess && <SuccessMessage>{enquirySuccess}</SuccessMessage>}
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
      </form>
    </>
  )
}

export default BookingEnquiry;