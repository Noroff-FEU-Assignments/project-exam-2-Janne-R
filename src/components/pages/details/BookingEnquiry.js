import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const schema = yup.object().shape({

  firstName: yup.string().required("Please enter your first name").min(1, "Your name must be at least one character"),
  lastName: yup.string().required("Please enter your last name").min(1, "Your name must be at least one character"),
  email: yup.string().required("Please enter a email adress").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

const BookingEnquiry = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First name</label>
      <input {...register("firstName")} />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <label htmlFor="lastname">Last name</label>
      <input {...register("lastName")} />
      {errors.lastName && <span>{errors.lastName.message}</span>}

      <label htmlFor="email"> Email</label>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="message">Message</label>
      <textarea rows="7"{...register("message")} />
      {errors.message && <span>{errors.message.message}</span>}

      <Button text="Send" />
    </FormContainer>
  )
}

export default BookingEnquiry;