import { Button, Grid, ListItem, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../hook";
import { deleteTodo } from "../../redux/todoSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export interface TodoListProps {}

export default function TodoList(props: TodoListProps) {
  const todos = useAppSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <h1>List Todo for Today</h1>
        </Grid>
        <Grid item xs={4}>
          <Link to="/add_todo">
            <Button variant="contained">Add Todo</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={2}></Grid>
      {todos.map((todo) => (
        <ListItem disablePadding key={todo.id}>
          <ListItemText primary={todo.desc} />
          <Link to={`/update_todo/${todo.id}`}>
            <EditIcon></EditIcon>
          </Link>
          <Button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
            <DeleteIcon></DeleteIcon>
          </Button>
        </ListItem>
      ))}
    </>
  );
}
