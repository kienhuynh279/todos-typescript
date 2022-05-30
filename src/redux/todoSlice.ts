import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import { stat } from 'fs';
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
        uploadTodo: (state, action: PayloadAction<TodoState>) => {
            const {
                payload: {id, desc, completed},
            } = action;

            state.todoList = state.todoList.map((book) =>
                book.id === id ? { ...book, desc, completed } : book,
            )
        },

        deleteBook: (state, action: PayloadAction<{ id: string }>) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload.id);
          },
    }
})

export const { addTodo, uploadTodo, deleteBook } = todoSlice.actions

export default todoSlice.reducer

