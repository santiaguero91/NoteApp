import { useDispatch, useSelector } from "react-redux";
import { StyldButton } from "../../../Views/Home/HomeStyle";
import { AllArchivedBox, MainBox, StyldFab } from "./CategoryDisplayerStyle";
import { useEffect, useState } from "react";
import {
  changeNoFilter,
  getCategories,
  getNotes,
} from "../../../redux/actions";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Box, Button, Typography } from "@mui/material";
import { CategoryButton } from "../CategoryCard/CategoryCardStyle";
import AddIcon from "@mui/icons-material/Add";
import FormCategory from "../FormCategory/FormCategory";

const CategoryDisplayer = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  const filtro = useSelector((state) => state.filtro);

  const [open, setOpen] = useState(false);
  const [mainfilter, setMainFilter] = useState(1);

  function handleNoFilter(event) {
    setMainFilter(1);
    dispatch(changeNoFilter(["All"]));
    setTimeout(() => {
      dispatch(getNotes());
    }, 500);
  }
  function handleArchivedFilter(event) {
    setMainFilter(2);
    dispatch(changeNoFilter(["Archived"]));
    setTimeout(() => {}, 500);
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <MainBox>
      <AllArchivedBox>
        <CategoryButton
          onClick={(e) => handleNoFilter(e)}
          style={{
            backgroundColor: mainfilter === 1 ? "white" : "rgb(162,225,220)",
          }}
        >
          All
        </CategoryButton>
        <CategoryButton
          onClick={(e) => handleArchivedFilter(e)}
          style={{
            backgroundColor: mainfilter === 2 ? "white" : "rgb(162,225,220)",
          }}
        >
          Archived
        </CategoryButton>
      </AllArchivedBox>

      {allCategories &&
        allCategories?.map((el) => {
          return (
            <CategoryCard
              key={el.id}
              id={el.id}
              name={el.name}
              deletable={el.deletable}
            />
          );
        })}
      <StyldFab
        color="primary"
        aria-label="add"
        title="Add Category"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AddIcon />
      </StyldFab>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <FormCategory />
      </div>
    </MainBox>
  );
};

export default CategoryDisplayer;
