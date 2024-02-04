import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)`
  background-color: rgb(162, 225, 220);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5%;
  width: 80vw;
  max-height: 80vh;

  @media screen and (max-width: 650px) {
    margin: 5% 10% 5% 10%;
  }

`;
