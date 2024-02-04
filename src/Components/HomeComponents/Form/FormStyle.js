import { Box, Button, TextField, FormLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export const MainBox = styled(Box)`
  background-color: rgb(162, 225, 220);
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  margin: 0 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding-bottom: 3%;

  @media screen and (max-width: 650px) {
    margin: 8% auto 0 auto;
    width: 80%;

  }
  
`;


export const StyldTextField = styled(TextField)`
  background-color: rgb(237, 234, 229);
  transition: 2s;
  border-radius: 25px;
`;

export const StyldTypo = styled(Typography)`
  color: black;
  font-size: larger;
  font-weight: 700;
  margin-top: 5%;
`;

export const StyldFormLabel = styled(FormLabel)`
  display: flex;
  flex-direction: column;
  margin: 0% 0 10% 0;
  width: 60%;
  @media screen and (max-width: 770px) {
    width: 80%;
  }
`;

export const StyldFormButton = styled(Button)`
  background-color: rgb(237, 234, 229);
  color: black;
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: rgba(199, 199, 199);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
export const CategoriesBox = styled(Box)`
  display: flex;
  flex-direction: row;
  background-color: rgb(237, 234, 229);
  border-radius: 15px;
  padding: 2%;
  margin: 1% 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const CleanBtn = styled(Button)`
  width: fit-content;
  border-radius: 15px;
  background-color: rgb(255, 219, 203);
  margin: 1% auto 1% auto;
  color:rgb(89, 89, 89);
  :hover {
    background-color: rgb(242,178,162);
  }
`;
