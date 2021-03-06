import store from "./store";
import { bugAdded } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
