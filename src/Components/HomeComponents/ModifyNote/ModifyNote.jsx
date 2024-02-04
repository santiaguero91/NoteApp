import { useState } from "react";
import {
  MainBox,
  StyldFormButton,
  StyldFormLabel,
  StyldTextField,
} from "./ModifyNoteStyle";
import { MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, putNote } from "../../../redux/actions";

const ModifyNote = ({ id, title, description, categories,handleClose,archived }) => {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: title,
    description: description,
    archived: archived,
    categories: categories,
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    setInput({
      ...input,
      categories: [...input.categories, e.target.value],
    });
  };
  const handleModifySubmit = (e) => {
    e.preventDefault();
    dispatch(putNote(input, id));
    setInput({
      title: "",
      description: "",
      archived: false,
      categories: [],
    });
    setTimeout(() => {
      dispatch(getNotes());
    }, 500);
    handleClose()
  };
  const clean = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      categories: [],
    });
  };

    return (
      <MainBox>
      <h2>Modify Task {title}</h2>
      <StyldFormLabel>
        <StyldTextField
          label="Change Title"
          placeholder={input.title}
          id="inputname"
          type="text"
          value={input.name}
          name="title"
          onChange={(e) => handleChange(e)}
          title="title"
          InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <StyldTextField
          label="Task Description"
          id="inputname"
          type="text"
          placeholder={input.description}
          value={input.name}
          name="description"
          onChange={(e) => handleChange(e)}
          title="description"
          multiline
          rows={6}
          InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />

        <TextField
          id="outlined-select-category"
          select
          label="Select Categories"
          defaultValue={""}
          variant="standard"
          helperText="Please select a category"
          onChange={(e) => handleSelect(e)}
        >
          {allCategories &&
            allCategories.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
        </TextField>
        <h3>Categories Selected</h3>
        <ul>
          <li>{input.categories.map((el) => el + "  , ")}</li>
        </ul>
        {input.categories.length !== 0 && (
          <StyldFormButton onClick={(e) => clean(e)}>Clean</StyldFormButton>
        )}
        {input.title !== "" ? (
          <StyldFormButton
            id="submitButton"
            onClick={(e) => handleModifySubmit(e)}
            type="submit"
          >
            MODIFY TASK
          </StyldFormButton>
        ) : (
          <StyldFormButton
            id="submitButton"
            disabled
            onClick={(e) => handleModifySubmit(e)}
            type="submit"
          >
            MODIFY NOTE
          </StyldFormButton>
        )}
      </StyldFormLabel>
    </MainBox>
    );
  };
  
  export default ModifyNote;