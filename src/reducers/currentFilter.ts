let initialStore = localStorage.getItem("STORE")
  ? JSON.parse(localStorage.getItem("STORE") || "all").currentFilter
  : "all";
const currentFilter = (state = initialStore, actions: any) => {
  switch (actions.type) {
    case "all":
      return (state = "all");
    case "completed":
      return (state = "completed");
    case "active":
      return (state = "active");
    default:
      return state;
  }
};

export default currentFilter;
