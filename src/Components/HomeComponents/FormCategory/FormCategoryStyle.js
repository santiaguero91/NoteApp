import { Box, FormLabel, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)`
  background-color: rgb(162, 225, 220);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  margin: 0 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const StyldTypo = styled(Typography)`
  color:black;
  font-size: larger;
  font-weight: 700;
  margin-top: 5%;
  ;
`;

export const StyldFormLabel = styled(FormLabel)`
  display: flex;
  flex-direction: column;
  margin: 10% 0 10% 0;
  width: 60%;
`;

export const StyldTextField = styled(TextField)`
  background-color: rgb(237,234,229);
  transition: 2s;
  border-radius: 25px;
`;

export const StyldFormButton = styled(TextField)`
  background-color: rgb(237,234,229);
  transition: 2s;
  border-radius: 25px;
  margin-bottom: 5%;
`;