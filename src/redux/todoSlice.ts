import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export interface TodoState {
    id: string,
    desc: string,
    completed: boolean,
}

export interface initialStateType  {
    todoList: TodoState[];
  };
  
  const todoList: TodoState[] = [
    {
      id: uuidv4(),
      desc: 'Learn Typescript',
      completed: true
    },
    ];
  
  const initialState: initialStateType = {
    todoList,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>) => {
            state.todoList.push(action.payload)
        },
        updateTodo: (state, action: PayloadAction<TodoState>) => {
            const {
                payload: {id, desc, completed},
            } = action;

            state.todoList = state.todoList.map((todo) =>
                todo.id === id ? { ...todo, desc, completed } : todo,
            )
        },

        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
          },
    }
})

export const { addTodo, updateTodo,  deleteTodo} = todoSlice.actions

export default todoSlice.reducer

