import { useState } from "react";
import ModifyNote from "../ModifyNote/ModifyNote";
import Modal from "@mui/material/Modal";
import {
  DescriptionBox,
  MainContainerDiv,
  NoteBox,
  StyldType,
  TypeTitle,
} from "./NoteCardStyle";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { getNotes, putNote } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "@mui/material/Divider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "transparent",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  color: "black",
};

const NoteCard = ({
  id,
  title,
  archived,
  description,
  categories,
  handleDelete,
}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: title,
    description: description,
    archived: !archived,
    categories: categories,
  });

  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDetailOpen = () => setDetailOpen(true);
  const handleDetailClose = () => setDetailOpen(false);

  const change = () => {
    dispatch(putNote(input, id));
    setTimeout(() => {
      dispatch(getNotes());
    }, 500);

    setInput({
      title: title,
      description: description,
      archived: archived,
      categories: categories,
    });
  };
  return (
    <MainContainerDiv
      style={{
        backgroundColor: archived ? "rgb(255,219,203)" : "rgb(237,234,229)",
        color: "black",
      }}
    >
      <InventoryIcon
        fontSize="medium"
        onClick={() => change()}
        style={{ cursor: "pointer" }}
        titleAccess="Archived"
      />
      <StyldType>{title}</StyldType>

      {description && (
        <VisibilityIcon
          titleAccess="See Details"
          fontSize="medium"
          onClick={() => handleDetailOpen()}
          style={{ cursor: "pointer" }}
        />
      )}

      <ChecklistIcon
        fontSize="medium"
        onClick={() => handleOpen()}
        style={{ cursor: "pointer" }}
        titleAccess="Modify"
      />
      <CloseIcon
        fontSize="medium"
        onClick={handleDelete}
        aria-label="CloseIcon"
        color="secondary"
        style={{ cursor: "pointer" }}
      />

      <Modal
        open={detailOpen}
        onClose={handleDetailClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NoteBox>
          <TypeTitle variant="h5">{title}</TypeTitle>

          {/* <Divider /> */}
          {/* <Typography variant="h6">Description:</Typography> */}
          <DescriptionBox>
            <Typography>{description}</Typography>
          </DescriptionBox>
          {/* <Divider /> */}
          {categories.length ? <Typography variant="h6">Categories:</Typography> : ""}
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "transparent",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {categories.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          
        </NoteBox>



        
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={() => handleClose()}>X</Button>
          <ModifyNote
            id={id}
            title={title}
            description={description}
            categories={categories}
            handleClose={handleClose}
            archived={archived}
          />
        </Box>
      </Modal>
    </MainContainerDiv>
  );
};

export default NoteCard;
