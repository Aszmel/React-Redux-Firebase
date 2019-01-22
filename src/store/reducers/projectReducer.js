const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "find peach to eat it!" },
    {
      id: "2",
      title: "collect all the stars",
      content: "to be Master of Stars"
    },
    { id: "3", title: "egg hunt with aszmel", content: "scrambled eggs!" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
