import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainBox } from "./NoteCardsDisplayerStyle";
import { deleteNote, getNotes } from "../../../redux/actions";
import NoteCard from "../NoteCard/NoteCard";

const NoteCardsDisplayer = ({reload}) => {
  const dispatch = useDispatch();
  const filtro = useSelector((state) => state.filtro);
  const filtered = useSelector((state) => state.notes)|| [];

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  let filteredNotes = filtered;

  const handleDelete = (id) => {
    dispatch(deleteNote(id))
    setTimeout(() => {
      dispatch(getNotes());
    }, 500);
  };

  useEffect(() => {
    if (filtro[0] === "All") {
      filteredNotes = filtered.filter((el) => el.archived === false);
    }
   if (filtro[0] === "Archived") {
     filteredNotes = filtered.filter((el) => el.archived === true);
   }   }, [filtro]);

    
    return (
      <MainBox>
      {filtered &&
        filtered?.map((el) => {
          return (
            <NoteCard
              key={el.id}
              id={el.id}
              title={el.title}
              archived={el.archived}
              description={el.description}
              categories={el.categories}
              handleDelete={() => handleDelete(el.id)}
            />
          );
        })}
    </MainBox>
  );
};

export default NoteCardsDisplayer;
