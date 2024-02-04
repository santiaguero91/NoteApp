import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CategoryButton = styled(Button)`
  color: rgba(0,0,0);
  transition: 1s;
  border-radius: 8px;
  background-color: rgb(162,225,220);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  .special{
    color:red;
  }

  :active{
    background-color: red;
    color: red;
  }
  :hover {
    background-color: #4fbd7f;
  }
  :focus {
    outline: none;
    border: none;
  }
`;