import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MainBox,
  StyldFormButton,
  StyldFormLabel,
  StyldTextField,
  StyldTypo,
} from "./FormCategoryStyle";
import { getCategories, postCategory } from "../../../redux/actions";

const FormCategory = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    deletable: true,
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategory(input));
    setInput({
      name: "",
      deletable: true,
    });
    setTimeout(() => {
      dispatch(getCategories());
    }, 500);
  };

  return (
    <MainBox>
      <StyldTypo variant="h1">New Category</StyldTypo>
      <StyldFormLabel>
        <StyldTextField
          label="Name"
          id="inputname"
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => handleChange(e)}
          title="name"
          InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }}
        />
      </StyldFormLabel>
      {input.name !== "" ? (
        <StyldFormButton
          id="submitButton"
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Create
        </StyldFormButton>
      ) : (
        <StyldFormButton
          id="submitButton"
          disabled
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Create
        </StyldFormButton>
      )}
    </MainBox>
  );
};

export default FormCategory;
