import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import Button from "../../common.styles/Button";
import postFormData from "../../../lib/postFormData";
import postRequest from "../../../lib/postRequest";
import { BASE_URL } from "../../../constants/api";
import { SuccessMessage, ErrorMessage } from "../../common.styles/DisplayMessages";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { H2 } from "../../common.styles/DisplayText";
import Loader from "../../common.styles/Loader";

const Form = styled.form`
  background-color:${({ theme }) => theme.colors.backgroundColorLight};
  padding:10px ;
`;

const Flex = styled.div`
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

const FileInput = styled.input`
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

const Checkbox = styled.input`
  width: 40px;
  height: 40px;
  accent-color: ${({ theme }) => theme.colors.primaryColor};
`;

const StyledButton = styled(Button)`
  align-self: baseline;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.errorColor};
  margin-bottom: 20px;
  margin-top: -20px;
`;

const phoneRegExp2 = /^[0-9]{8}$/;

const schema = yup.object().shape({
  hotelName: yup.string().required("Please enter a hotel name").min(1, "The hotel name must be at least one character"),
  shortDescription: yup.string().required("Please enter a short description").min(10, "The short description must be at least ten character"),
  longDescription: yup.string().required("Please enter a long description").min(20, "The long description must be at least twenty character"),
  price: yup.number().typeError("Please enter a price, must be a number").positive('Must be a positive number').required(),
  adress: yup.string().required("Please enter a hotel adress").min(1, "The hotel adress must be at least one character"),
  email: yup.string().required("Please enter a email adress").email("Must be a valid email"),
  phone: yup.string().required("Please enter a phone number").matches(phoneRegExp2, 'Phone number must contain only numbers and be exact 8 digits'),
  image: yup
    .mixed()
    .required("Please add an image")
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .webp and .png",
      (value) => {
        console.log(value);
        return (
          value &&
          (value.type === "image/jpeg" ||
            value.type === "image/bmp" ||
            value.type === "image/jpg" ||
            value.type === "image/webp" ||
            value.type === "image/png")
        );
      })
});

const AddNewHotel = () => {
  const [addNewSuccess, setAddNewSuccess] = useState(null);
  const [auth] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  const { register, clearErrors, setValue, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(schema),
  });

  const onImage = (e) => {
    setValue("image", e.target.files[0]);
    clearErrors("image");
  }

  const onSubmit = async ({ image, ...data }) => {
    setAddNewSuccess(null);
    setIsLoading(true);
    setIsError(false);

    try {
      const addedHotel = await postRequest(`${BASE_URL}/api/hotels`, { data }, { Authorization: `Bearer ${auth.jwt}` });

      const formData = new FormData();
      formData.append("files", image);
      formData.append("ref", "api::hotel.hotel");
      formData.append("refId", addedHotel.data.id);
      formData.append("field", "coverImage");

      await postFormData(`${BASE_URL}/api/upload`, formData, { Authorization: `Bearer ${auth.jwt}` });

      setAddNewSuccess("New hotel added")
      setIsLoading(false);
    } catch (error) {
      setIsError("Sorry, there was an error!");
      setIsLoading(false);
    }
    return false;
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div id="addNew">
      <H2 title="Create new" uppercase />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Label htmlFor="hotelName">Hotel Name</Label>
          <Input {...register("hotelName")} placeholder="Hotel name" />
          {errors.hotelName && <Span>{errors.hotelName.message}</Span>}

          <Label htmlFor="shortDescription">Short description</Label>
          <Textarea rows="6"{...register("shortDescription")} placeholder="Short description" />
          {errors.shortDescription && <Span>{errors.shortDescription.message}</Span>}

          <Label htmlFor="longDescription">Long description</Label>
          <Textarea rows="12"{...register("longDescription")} placeholder="Long description" />
          {errors.longDescription && <Span>{errors.longDescription.message}</Span>}

          <Label htmlFor="price">Price</Label>
          <Input {...register("price")} placeholder="Price" />
          {errors.price && <Span>{errors.price.message}</Span>}

          <Label htmlFor="adress">Adress</Label>
          <Input {...register("adress")} placeholder="Adress" />
          {errors.adress && <Span>{errors.adress.message}</Span>}

          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} placeholder="Email" />
          {errors.email && <Span>{errors.email.message}</Span>}

          <Label htmlFor="phone">Phone</Label>
          <Input {...register("phone")} placeholder="Phone" />
          {errors.phone && <Span>{errors.phone.message}</Span>}

          <Label htmlFor="image">Image</Label>
          <FileInput
            onChange={onImage}
            type="file"
          />
          {errors.image && <Span>{errors.image.message}</Span>}

          <Label htmlFor="isFeatured">Is featured?</Label>
          <Checkbox type="checkbox" {...register("isFeatured")} />

        </Flex>
        <StyledButton text="Send" />
        {addNewSuccess && <SuccessMessage>{addNewSuccess}</SuccessMessage>}
        {isLoading && <Loader />}
        {isError && <ErrorMessage>{isError}</ErrorMessage>}
      </Form>
    </div>
  )
}

export default AddNewHotel;