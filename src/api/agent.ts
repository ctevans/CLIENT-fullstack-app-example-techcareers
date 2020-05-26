import axios, { AxiosResponse } from 'axios';
import { TodoItem } from '../models/TodoItem';

axios.defaults.baseURL = "https://localhost:44348/api" //MODIFY THIS URL BASED ON WHATEVER YOUR BACKEND GIVES YOU. Copied code.

const responseBody = (response: AxiosResponse) => response.data;

// const config = {
//     headers: {
//         "Content-Type": "application/json"
// 5UDIhHrb4UvCb7kIW+red7X12hMXfo9gsQMoqYsSbG4=
//     }
// }

const ToDoApis = {
    getList: (): Promise<TodoItem[]> =>
        axios.get('/todos').then(responseBody),
    delete: (copiedid: string) => axios.delete(`/todos/${copiedid}`).then(responseBody),
    post: (todoItem: TodoItem) => axios.post('/todos', todoItem),
    patch: (id: string) => axios.patch(`/todos/${id}`).then(responseBody),
    put: (copiedItem: TodoItem) => axios.put(`/todos/${copiedItem.id}`, copiedItem)
}

export default {
    ToDoApis
    //fG8MIlcxkEAGC8/d9haLXXL9m+qDwprLnr0pNz1dT14=
}