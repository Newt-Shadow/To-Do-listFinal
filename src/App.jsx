import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FloatingAddButton from './components/FloatingAddButton';
import theme from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from local storage
  const fetchTasks = () => {
    const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(localTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container fluid className="p-5 bg-dark text-light" style={{ minHeight: '100vh' }}>
        <Typography variant="h3" className="text-center" gutterBottom sx={{ fontFamily: 'Caveat, cursive' }}>
          The Best Of The Best , The Greatest Of The Greatest 
        </Typography>
        <Typography variant="h3" className="text-center" gutterBottom sx={{ fontFamily: 'Caveat, cursive' }}>
          Your To-Do-list Web App , Enjoyy!!
        </Typography>

        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <AddTask setTasks={setTasks} />
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <TaskList tasks={tasks} setTasks={setTasks} />
          </Col>
        </Row>

        
      </Container>
    </ThemeProvider>
  );
}

export default App;
