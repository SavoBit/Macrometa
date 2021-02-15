import { createStore } from "redux";
import { rootEpic, rootReducer } from "../reducers/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware, thunk))
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore;
