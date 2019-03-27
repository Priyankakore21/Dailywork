const { createStore } = require("redux");

const initialState = {
  age: 21
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    console.log("newstate age" + newState.age);
    newState.age += 1;
  }

  if (action.type === "SUB") {
    newState.age -= 1;
  }
  return newState;
};
const store = createStore(myReducer);
console.log("initial state " + JSON.stringify(store.getState()));
store.dispatch({ type: "ADD" });
console.log("state after added" + JSON.stringify(store.getState()));
store.dispatch({ type: "SUB" });
console.log("state after substarcted" + JSON.stringify(store.getState()));
