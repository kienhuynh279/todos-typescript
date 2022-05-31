import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { AddTodo, TodoList } from './features/todos'

function App() {
  return (
      <>
      
        <Container maxWidth="lg">
         <h1>Todos App</h1>
          <Routes>
            <Route path="/*" element={<TodoList />}></Route>
            <Route path='/add_todo' element={<AddTodo></AddTodo>}></Route>
            <Route path="/update_todo/:id" element={<AddTodo></AddTodo>} />
          </Routes>
        </Container>  
      </>
  );
}

export default App;
