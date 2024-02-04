import { useState } from "react";
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
import { getNotes, postNotes } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Form = ({reload}) => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  const [input, setInput] = useState({
    title: "",
    description: "",
    archived: false,
    categories: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNotes(input));
    setInput({
      title: "",
      description: "",
      archived: false,
      categories: [],
    });
    setTimeout(() => {
      reload()
      setInput({
        title: "",
        description: "",
        archived: false,
        categories: [],
      });
    }, 2000);
    setTimeout(() => {
    }, 2000);
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
      <StyldTypo>Create New Task</StyldTypo>
      <StyldFormLabel>
        <StyldTextField
          label="Task Title"
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
        <CategoriesBox>
          <ul>
            <li>{input.categories.map((el) => el + "  , ")}</li>
          </ul>
        </CategoriesBox>
          {input.categories.length !== 0 && (
            <CleanBtn onClick={(e) => clean(e)}>Delete Categories</CleanBtn>
          )}

        {input.title !== "" ? (
          <StyldFormButton
            id="submitButton"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            CREATE TASK
          </StyldFormButton>
        ) : (
          <StyldFormButton
            id="submitButton"
            disabled
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            CREATE TASK
          </StyldFormButton>
        )}
      </StyldFormLabel>
    </MainBox>
  );
};

export default Form;
