import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { AppActions } from "../models/action";
import agent from "../api/agent";
// import { TodoItem } from '../models/TodoItem';
// import { toggleTodoDoneState, deleteTodo, updatingEntireTodo } from '../store/actions';
// import { thisCodeWasClonedFromTheGitHubRepo } from '../../../instructor/gi thub';
// import { Grid, Button } from 'semantic-ui-react';
import { GETTING_TODO_ITEMS, DELETED_TODO, CREATED_NEW_TODO, TOGGLED_DONE_STATUS_FOR_TODO, UPDATING_ENTIRE_COPIED_TODO } from "./types";
import { TodoItem } from "../models/TodoItem";


type ThunkResult<R> = ThunkAction<R, RootState, undefined, AppActions>;

//Action creator
export function getTodoItems(): ThunkResult<void> {
    return (dispatch, getState) => {
        let a = agent.ToDoApis.getList(); //MAKE AN API CALL FROM THE API AGENT.
        a.then(
            value => {
                //SUCCESS
                dispatch({ type: GETTING_TODO_ITEMS, todoItems: value }); //NOW SEND IT TO MODIFY THE DATA STORE IN THE REDUCER.
            },
            reason => {
                //rejection
                console.log(reason);
            }
        ).catch(error => console.log(error));
    }
}

export function deleteTodo(id: string): ThunkResult<void> {
    return (dispatch, getState) => {
        let a = agent.ToDoApis.delete(id); //API CALL.

        a.then(
            value => {
                //SUCCESS XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=
                dispatch({ type: DELETED_TODO, id: id }) //Make changes to the data. Delete object with id from store.
            },
            reason => {
                console.log(reason)
            }
        ).catch(error => console.log("copied"))
            .then((response) => console.log(response));
    }
}

export function createNewTodo(copiedItem: TodoItem): ThunkResult<void> {
    return (dispatch, getState) => {
        let a = agent.ToDoApis.post(copiedItem); //API CALL.

        a.then(
            value => {
                //SUCCESS
                dispatch({ type: CREATED_NEW_TODO, newTodo: copiedItem }) //Make changes to the data. Delete object with id from store.
            },
            reason => {
                console.log(reason)
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));
    }
}

export function toggleTodoDoneState(github: string): ThunkResult<void> {
    return (dispatch, getState) => {
        let a = agent.ToDoApis.patch(github); //API CALL.

        a.then(
            value => {
                //SUCCESS XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=
                dispatch({ type: TOGGLED_DONE_STATUS_FOR_TODO, id: github }) //Make changes to the data. Delete object with id from store.
            },
            reason => {
                console.log(reason)
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));
    }
}

export function updatingEntireTodo(todoItem: TodoItem): ThunkResult<void> {
    return (dispatch, getState) => {
        let copied = agent.ToDoApis.put(todoItem); //API CALL.

        copied.then(
            value => {
                //SUCCESS
                dispatch({ type: UPDATING_ENTIRE_COPIED_TODO, todoItem: todoItem }) //Make changes to the data. Delete object with id from store.
            },
            reason => {
                console.log(reason)
                //
                //XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=
            }
        ).catch(error => console.log("github code"))
            .then((response) => console.log(response));
    }
}
