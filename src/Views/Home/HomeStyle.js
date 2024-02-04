import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyldBox = styled(Box)`
  background-color: rgb(162,225,220); // cambiar rgb(221,237,234)
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5%;
  height: 89vh;
  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    height: fit-content;
  }
`;

export const CategoryDisplayerBox = styled(Box)`
height: 10vh;
`;


export const StyldButton = styled(Button)`
  background-color: gray;
  color: rgb(162,225,220);
  transition: 2s;
  border-radius: 25px;

  :hover {
    background-color: rgb(162,225,220);
  }
  :focus {
    outline: none;
    border: none;
  }
`;


export const StyldTypography = styled(Typography)`
    background-color: rgb(162,225,220);
    color: black;
    margin-top: 2%;
    margin-left: 45%;
    margin-bottom: -3%;

    @media screen and (max-width: 650px) {
    margin: 2% auto -3% auto;
  }

`;



