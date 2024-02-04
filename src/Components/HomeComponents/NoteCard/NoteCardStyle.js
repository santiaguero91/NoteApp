import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainerDiv = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1% 3%;
  width: 70%;
  height: 1vh;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 4%;

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(100px);
    transition: 1s ease;
  }

  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(0px);
    transition: 1s ease;
  }
`;

export const ModifyBox = styled(Box)`
  position: relative;
`;

export const DeleteBtn = styled(Button)`
  display: flex;
  position: relative;
  background-color: transparent;
  margin: 0% 1% auto auto;
  border-radius: 25px;
`;

export const StyldType = styled(Typography)`
  margin-left: 5%;
  color: black;
`;

export const NoteBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: fit-content;
  background-color: rgb(237, 234, 229);
  border: none;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 4px;
  color: black;
  border-radius: 10px;




`;

export const TypeTitle = styled(Typography)`
  position: relative;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;

export const DescriptionBox = styled(Box)`
  position: relative;

  margin: 4% auto 10%  5%;


`;
