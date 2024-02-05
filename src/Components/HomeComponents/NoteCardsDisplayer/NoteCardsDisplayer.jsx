import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainBox } from "./NoteCardsDisplayerStyle";
import { deleteNote, getNotes } from "../../../redux/actions";
import NoteCard from "../NoteCard/NoteCard";
import Loader from "../../Loader";

const NoteCardsDisplayer = () => {
  const dispatch = useDispatch();
  const filtro = useSelector((state) => state.filtro);
  const filtered = useSelector((state) => state.notes) || [];
  const [filteredNotes, setFilteredNotes] = useState(filtered);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    if (filtro[0] === "All") {
      setFilteredNotes(filtered);
    } else if (filtro[0] === "Archived") {
      setFilteredNotes(filtered.filter((el) => el.archived));
    }
  }, [filtro, filtered]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    setTimeout(() => {
      dispatch(getNotes());
    }, 500);
  };

  return (
    <MainBox>
      {!filteredNotes ? (
        <Loader />
      ) : (
        filteredNotes.map((el) => (
          <NoteCard
            key={el.id}
            id={el.id}
            title={el.title}
            archived={el.archived}
            description={el.description}
            categories={el.categories}
            handleDelete={() => handleDelete(el.id)}
          />
        ))
      )}
    </MainBox>
  );
};

export default NoteCardsDisplayer;
