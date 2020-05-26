// import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
// import { thisCodeWasClonedFromTheGitHubRepo } from '../../../instructor/gi thub';
import { combineReducers, applyMiddleware, createStore } from "redux";
import { AppActions } from "../models/action";
// import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
// import { thisCodeWasClonedFromTheGitHubRepo } from '../../../instructor/gi thub';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { todoReducer } from "./reducers";

const rootReducer = combineReducers({
    todoReducer: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

//Configures the store. Note that the ThunkMuddleware is being used here 
//to help handle async actions.
//LN3FIhcnbKx3djphlDs+rhW1iHMNT/uNXlc83hcP/G8=
export default function configureStore() {
    const store = createStore<RootState, AppActions, {}, {}>(
        rootReducer,
        applyMiddleware(
            thunk as ThunkMiddleware<RootState, AppActions>
        )
    );

    return store;
}