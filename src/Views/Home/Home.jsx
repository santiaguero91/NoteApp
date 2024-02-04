import CategoryDisplayer from "../../Components/HomeComponents/CategoryDisplayer/CategoryDisplayer";
import NoteCardsDisplayer from "../../Components/HomeComponents/NoteCardsDisplayer/NoteCardsDisplayer";
import { StyldBox, CategoryDisplayerBox, StyldTypography } from "./HomeStyle";
import Form from "../../Components/HomeComponents/Form/Form";
import { useDispatch } from 'react-redux';
import { getNotes } from "../../redux/actions";
import {useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1)

  function reload() {
    setTimeout(() => {
      dispatch(getNotes());
      setCount(count+1)
    }, 500);
  }

  return (
    <div>
      <CategoryDisplayerBox>
        <CategoryDisplayer />
      </CategoryDisplayerBox>
      <StyldTypography variant="h3">To Do List</StyldTypography>
      <StyldBox>
        <Form reload={reload} />
        <NoteCardsDisplayer reload={reload} />
      </StyldBox>
    </div>
  );
};

export default Home;
