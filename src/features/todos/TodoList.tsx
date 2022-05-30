import { Button, FormControl, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface TodoListProps {
}

export default function TodoList (props: TodoListProps) {
  return (
      <>
        <h1>Todos</h1>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Enter Todo" variant="outlined" />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained">Add Todo</Button>
            </Grid>
        </Grid>
      </>
  );
}
