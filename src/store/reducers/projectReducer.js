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
  return state;
};

export default projectReducer;
