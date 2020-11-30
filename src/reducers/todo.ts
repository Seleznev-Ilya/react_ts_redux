import { ADD_NEWONE_TASK } from "../constants";
import { TOGGLE_ITEM_TASK } from "../constants";
import { EDIT_ITEM_TASK } from "../constants";
import { DELET_ITEM_TASK } from "../constants";
import { SELECT_ALL_ITEMS_TASK } from "../constants";
import { DELETE_SELECTED_ITEMS_TASK } from "../constants";

const todoList = (state = [], actions: any) => {
  switch (actions.type) {
    case ADD_NEWONE_TASK:
      return [
        ...state,
        {
          id: actions.id,
          payload: actions.payload,
          completed: actions.completed,
        },
      ];

    case TOGGLE_ITEM_TASK:
      return state.map((todo: any) =>
        todo.id === actions.id ? { ...todo, completed: !todo.completed } : todo
      );

    case EDIT_ITEM_TASK:
      return state.map((todo: any) =>
        todo.id === actions.id ? { ...todo, payload: actions.payload } : todo
      );

    case DELET_ITEM_TASK:
      return state.filter((todo: any) => {
        return todo.id !== actions.id;
      });

    case SELECT_ALL_ITEMS_TASK:
      const areAllMarked = state.some((todo: any) => todo.completed);
      return state.map((todo: any) => ({
        ...todo,
        completed: !areAllMarked,
      }));

    case DELETE_SELECTED_ITEMS_TASK:
      return state.filter((todo: any) => todo.completed === false);

    default:
      return state;
  }
};

export default todoList;
