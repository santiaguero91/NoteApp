import { Box, Button, TextField, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyldTextField = styled(TextField)`
  background-color: rgb(237,234,229);
  transition: 2s;
  border-radius: 25px;
`;

export const MainBox = styled(Box)`
  background-color: rgb(162, 225, 220);
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 0 5%;
`;

export const StyldFormLabel = styled(FormLabel)`
  display: flex;
  flex-direction: column;
  margin: 10% 0 10% 0;
  width: 60%;
`;

export const StyldFormButton = styled(Button)`
  background-color: rgba(33, 33, 33);
  color: rgba(225, 225, 225);
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: darkgray;
  }
  :focus {
    outline: none;
    border: none;
  }
`;
