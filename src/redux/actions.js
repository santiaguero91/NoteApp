import axios from "axios";
import {
  GET_NOTES,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  CHANGE_FILTER,
  CHANGE_NOFILTER,
} from "./action-types";

//const Url = `http://localhost:3001`;
const Url = `https://backendnotes-jplwohf3u-santiaguero91.vercel.app`;

export function getNotes() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${Url}/notes`);
      return dispatch({
        type: GET_NOTES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postNotes(payload) {
  return async function () {
    try {
      const response = await axios.post(`${Url}/notes`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function putNote(payload, id) {
  return async function () {
    try {
      const response = await axios.put(`${Url}/notes/`+id, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}


export function deleteNote(id){
  return async function() {
    try {
      const response = await axios.delete(`${Url}/notes/` + id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
} 

export function getCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${Url}/category`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postCategory(payload) {
  return async function () {
    try {
      const response = await axios.post(`${Url}/category`, payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterNotesByCategory(payload){
  return{
      type: FILTER_BY_CATEGORY,
      payload
  }
} 
export function changeFilter(payload){
  return{
      type: CHANGE_FILTER,
      payload
  }
} 
export function changeNoFilter(payload){
  return{
      type: CHANGE_NOFILTER,
      payload
  }
} 