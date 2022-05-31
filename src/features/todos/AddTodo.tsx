import { Button, FormControl, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { addTodo, updateTodo } from '../../redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

export interface AddTodoProps {
}

export default function AddTodo (props: AddTodoProps) {
    const { id } = useParams<{ id: string }>();
    const todo = useAppSelector(state => state.todo.todoList.find(item => item.id === id))
    const nevagate = useNavigate()
    const [todoField, setTodoField ] = useState<string>(todo?.desc || ' ')
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        if(id) {
            dispatch(updateTodo({
                id: id,
                desc: todoField,
                completed: true
            }))
            nevagate('/')
            return
        }
        dispatch(addTodo({
            id: uuidv4(),
            desc: todoField,
            completed: true
        }))
        nevagate('/')
        clearInput();
    }

    const clearInput = () => {
        setTodoField('')
    }
    return (
        <div>
            <Grid container alignItems="center" marginTop={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField onChange={e => setTodoField(e.target.value)} id="outlined-basic" label="Enter Todo" variant="outlined" value={todoField}/>
                    </FormControl>
                </Grid>
                <Grid item xs={4} marginTop={2}>
                    <Button onClick={handleSubmit} variant="contained">Save Todo</Button>
                </Grid>
            </Grid>
        </div>
  );
}
