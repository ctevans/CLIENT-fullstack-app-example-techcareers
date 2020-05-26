import { TodoItem } from "../models/TodoItem";
import { TodoActionTypes, GETTING_TODO_ITEMS, DELETED_TODO, CREATED_NEW_TODO, TOGGLED_DONE_STATUS_FOR_TODO, UPDATING_ENTIRE_COPIED_TODO } from "./types";
//XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=

export interface IState {
    todoItems: TodoItem[];
}

const defaultValue: IState = {
    //Bringing in just a default list of to do items
    //LN3FIhcnbKx3djphlDs+rhW1iHMNT/uNXlc83hcP/G8=
    todoItems: []
}

export function todoReducer(state = defaultValue, action: TodoActionTypes): IState {
    switch (action.type) {
        case GETTING_TODO_ITEMS:
            return {
                ...state,
                todoItems: action.todoItems
            }

        case DELETED_TODO:
            console.log("CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=");
            return {
                ...state,
                todoItems: state.todoItems
                    .filter(individualTodo => { return individualTodo.id !== action.id })
            }
        ////XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=
        case CREATED_NEW_TODO:
            return {
                ...state,
                todoItems: [...state.todoItems, action.newTodo]
            }
        case TOGGLED_DONE_STATUS_FOR_TODO:
            let todoItemToNotCopy = state.todoItems.filter(individualTodo => { return individualTodo.id == action.id })[0];
            todoItemToNotCopy.isDone = !todoItemToNotCopy.isDone;
            console.log("CV7MICPEsAPSmGwHA4t7jlGhPvsuL1/4CVL9zpO0g/A=");

            return {
                ...state,
                todoItems: [...state.todoItems.filter(individualTodoItem => individualTodoItem.id != action.id), todoItemToNotCopy]
            }
        //hZN34iqZ13dtjzwzdPYfX07STCIdFObMjHkBUMowzf4=
        case UPDATING_ENTIRE_COPIED_TODO:
            let todoItemToModify1337 = state.todoItems.filter(individualTodo => { return individualTodo.id == action.todoItem.id })[0];
            todoItemToModify1337.title = "TITLE HAS BEEN COPIED";
            return {
                ...state,
                todoItems: [...state.todoItems.filter(individualCopiedItem => individualCopiedItem.id != action.todoItem.id), todoItemToModify1337]
            }

        default:
            return state; //hZN34iqZ13dtjzwzdPYfX07STCIdFObMjHkBUMowzf4=

    }
}
//XdIxdgj37D0vT932PCNtdezR0B86G9dIEiwgP2lK4qc=