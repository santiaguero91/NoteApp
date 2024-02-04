import { useState } from "react";
import { CategoryButton } from "./CategoryCardStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, filterNotesByCategory } from "../../../redux/actions";

const CategoryCard = ({ id, name, deletable }) => {
  const dispatch = useDispatch();
  const filtro = useSelector((state) => state.filtro);
  const[count,setCount] = useState(0)

  function handleFilter(event) {
    dispatch(changeFilter(event.target.id));
    dispatch(filterNotesByCategory(event.target.id));
    setCount(count+1)
  }

  return (
    <div>
      <CategoryButton
        onClick={(e) => handleFilter(e)}
        id={name}
        style={{
          backgroundColor: filtro.includes(name) ? " rgb(237,234,229) " : "rgb(162,225,220)",
        }}
      >
        {name}
      </CategoryButton>
    </div>
  );
};

export default CategoryCard;
