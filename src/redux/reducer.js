import {
  GET_NOTES,
  DELETE_NOTES,
  CHANGE_NOTES,
  POST_NOTES,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  POST_CATEGORY,
  FILTER_BY_CATEGORY,
  CHANGE_FILTER,
  CHANGE_NOFILTER,
} from "./action-types";
const initialState = {
  allNotes: "",
  mainFilteredNotes: "",
  notes: "",
  categories: "",
  filtro: ["All"],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      let mainFiltered = state.mainFilteredNotes;
      let notesFilterd = state.mainFilteredNotes;
      if (!mainFiltered.length || !notesFilterd.length) {
        return {
          ...state,
          notes: action.payload,
          allNotes: action.payload,
          mainFilteredNotes: action.payload,
        };
      } else {
        return {
          ...state,
          allNotes: action.payload,
          notes: action.payload,
        };
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case DELETE_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case CHANGE_NOTES:
      return {
        ...state,
      };
    case POST_NOTES:
      return {
        ...state,
      };
    case POST_CATEGORY:
      return {
        ...state,
      };
    case CHANGE_FILTER:
      let filtro = state.filtro;
      let index = filtro.indexOf(action.payload);
      if (index !== -1) {
        filtro.splice(index, 1);
      } else {
        filtro.push(action.payload);
      }
      return {
        ...state,
        filtro: filtro,
      };
    case CHANGE_NOFILTER:
      const alltheNotes = state.allNotes;
      let archivedFiltered = "";
      if (action.payload[0] === "Archived") {
        archivedFiltered = alltheNotes.filter((note) => note.archived === true);
        return {
          ...state,
          mainFilteredNotes: archivedFiltered,
          notes: archivedFiltered,
          filtro: action.payload,
        };
      } else {
        return {
          ...state,
          mainFilteredNotes: alltheNotes,
          filtro: action.payload,
          notes: alltheNotes,
        };
      }
    case FILTER_BY_CATEGORY:
      const allMainFiltNotes = state.mainFilteredNotes;
      const filter = state.filtro;
      let notesFiltered = allMainFiltNotes.filter((note) =>
        note.categories.some((category) => filter.includes(category))
      );
      return {
        ...state,
        notes: notesFiltered,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
