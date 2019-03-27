const inistailState = {
  b: 1
};

const reducer = (state = inistailState, action) => {
  if (action.type === "Update_B") {
    return {
      ...state,
      b: action.a + state.b
    };
  }

  return state;
};

export default reducer;
