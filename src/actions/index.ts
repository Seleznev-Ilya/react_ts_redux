import { ADD_NEWONE_TASK } from "../constants";
import { TOGGLE_ITEM_TASK } from "../constants";
import { EDIT_ITEM_TASK } from "../constants";
import { DELET_ITEM_TASK } from "../constants";
import { SELECT_ALL_ITEMS_TASK } from "../constants";
import { DELETE_SELECTED_ITEMS_TASK } from "../constants";

export const addTodo = (payload: string) => ({
  type: ADD_NEWONE_TASK,
  id: new Date().getTime(),
  payload,
  completed: false,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_ITEM_TASK,
  id,
});

export const editTodo = (payload: string, id: number) => ({
  type: EDIT_ITEM_TASK,
  payload,
  id,
});

export const deletTodo = (id: number) => ({
  type: DELET_ITEM_TASK,
  id,
});

export const selectAllTodo = () => ({
  type: SELECT_ALL_ITEMS_TASK,
});

export const DeleteSelectedTodo = () => ({
  type: DELETE_SELECTED_ITEMS_TASK,
});

export const setStateFilter = (type: string) => ({
  type,
});
