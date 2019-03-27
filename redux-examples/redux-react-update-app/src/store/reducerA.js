const inistailState = {
  a: 1
};

const reducer = (state = inistailState, action) => {
  if (action.type === "Update_A") {
    return {
      ...state,
      a: state.a + action.b
    };
  }

  return state;
};

export default reducer;
