import { Container } from '@mui/material';
import './App.css';
import { Header, Footer } from './components/common';
import { TodoItem, TodoList } from './features/todos'

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <TodoList></TodoList>
        <TodoItem></TodoItem>
      </Container>
      
    </div>
  );
}

export default App;
