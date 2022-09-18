import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";


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
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp2 = /^[0-9]{8}$/;

const schema = yup.object().shape({
  hotelName: yup.string().required("Please enter a hotel name").min(1, "The hotel name must be at least one character"),
  shortDescription: yup.string().required("Please enter a short description").min(10, "The short description must be at least ten character"),
  longDescription: yup.string().required("Please enter a long description").min(20, "The long description must be at least twenty character"),
  price: yup.number().typeError("Please enter a price, must be a number").positive('Must be a positive number').required(),
  adress: yup.string().required("Please enter a hotel adress").min(1, "The hotel adress must be at least one character"),
  email: yup.string().required("Please enter a email adress").email("Must be a valid email"),
  phone: yup.string().required("Please enter a phone number").matches(phoneRegExp2, 'Phone number must contain only numbers and be exact 8 digits'),
});



const AddNewHotel = () => {


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Label htmlFor="hotelName">Hotel Name</Label>
          <Input {...register("hotelName")} />
          {errors.hotelName && <Span>{errors.hotelName.message}</Span>}

          <Label htmlFor="shortDescription">Short description</Label>
          <Input {...register("shortDescription")} />
          {errors.shortDescription && <Span>{errors.shortDescription.message}</Span>}

          <Label htmlFor="longDescription">Long description</Label>
          <Input {...register("longDescription")} />
          {errors.longDescription && <Span>{errors.longDescription.message}</Span>}

          <Label htmlFor="price">Price</Label>
          <Input {...register("price")} />
          {errors.price && <Span>{errors.price.message}</Span>}

          <Label htmlFor="adress">Adress</Label>
          <Input {...register("adress")} />
          {errors.adress && <Span>{errors.adress.message}</Span>}

          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} />
          {errors.email && <Span>{errors.email.message}</Span>}

          <Label htmlFor="phone">Phone</Label>
          <Input {...register("phone")} />
          {errors.phone && <Span>{errors.phone.message}</Span>}

        </Flex>
        <StyledButton text="Send" />
      </Form>
    </>
  )
}

export default AddNewHotel;
