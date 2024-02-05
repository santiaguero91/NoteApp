import React, { useState } from "react";
import {
  CategoriesBox,
  CleanBtn,
  MainBox,
  StyldFormButton,
  StyldFormLabel,
  StyldTextField,
  StyldTypo,
} from "./FormStyle";
import { MenuItem, TextField } from "@mui/material";
import { postNotes } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = ({ reload }) => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  const [input, setInput] = useState({
    title: "",
    description: "",
    archived: false,
    categories: [],
  });

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      categories: [...prevInput.categories, e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNotes(input));
    setInput({
      title: "",
      description: "",
      archived: false,
      categories: [],
    });
    reload(); // Reload immediately after submitting the form
  };

  const clean = (e) => {
    e.preventDefault();
    setInput((prevInput) => ({
      ...prevInput,
      categories: [],
    }));
  };

  return (
    <MainBox>
      <StyldTypo>Create New Task</StyldTypo>
      <StyldFormLabel>
        <StyldTextField
          label="Task Title"
          id="inputTitle"
          type="text"
          value={input.title}
          name="title"
          onChange={(e) => handleChange(e)}
          InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
        <StyldTextField
          label="Task Description"
          id="inputDescription"
          type="text"
          value={input.description}
          name="description"
          onChange={(e) => handleChange(e)}
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
        <CategoriesBox>
          <ul>
            {input.categories.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </CategoriesBox>
        {input.categories.length !== 0 && (
          <CleanBtn onClick={(e) => clean(e)}>Delete Categories</CleanBtn>
        )}

        <StyldFormButton
          id="submitButton"
          onClick={(e) => handleSubmit(e)}
          type="submit"
          disabled={!input.title}
        >
          CREATE TASK
        </StyldFormButton>
      </StyldFormLabel>
    </MainBox>
  );
};

export default Form;
