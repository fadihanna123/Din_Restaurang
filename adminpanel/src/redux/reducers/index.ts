import { combineReducers } from "redux";

import { addFormReducer } from "./addForm";
import { editFormReducer } from "./editForm";
import { getIdReducer } from "./getId";
import { idReducer } from "./id";
import { listReducer } from "./list";
import { loadingReducer } from "./loading";
import { viewReducer } from "./view";

export const allReducers = combineReducers({
    addFormReducer,
    editFormReducer,
    listReducer,
    loadingReducer,
    viewReducer,
    idReducer,
    getIdReducer,
});
