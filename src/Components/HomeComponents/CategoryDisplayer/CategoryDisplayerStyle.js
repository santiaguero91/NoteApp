import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

export const MainBox = styled(Box)`
  background-color: rgb(85, 203, 205);
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  align-items: center;

  .dropdown-menu {
  position: absolute;
  display: flex;
  margin-top: 20%;
  right: 0%;
  color: black;
  background-color: transparent;
  border-radius: 25px;
  width: 200px;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
  transition: 1s ease;
  z-index: 1;
}

.dropdown-menu.inactive {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 1s ease;
}
`;


export const AllArchivedBox = styled(Box)`
width: 25%;
display: flex;
flex-direction: row;
justify-content: space-around;

/* border: 1px solid red; */

`;

export const StyldFab = styled(Fab)`
  background-color: rgb(85, 203, 205);
  scale: 80%;
  :focus{
  border: none;
  outline: none;
  }
`;
