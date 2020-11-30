import { SHOW_ALL } from "../constants/filter";
import { SHOW_ACTIVE } from "../constants/filter";
import { SHOW_COMPLETED } from "../constants/filter";

const currentFilter = (state = SHOW_ALL, actions: any) => {
  switch (actions.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case SHOW_COMPLETED:
      return SHOW_COMPLETED;
    case SHOW_ACTIVE:
      return SHOW_ACTIVE;
    default:
      return state;
  }
};

export default currentFilter;
