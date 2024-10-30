import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import EditTaskModal from './EditTaskModal';

const TaskList = ({ tasks, setTasks }) => {
  const [editTask, setEditTask] = useState(null); // To store the task to be edited

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEdit = (task) => {
    setEditTask(task); // Open the modal with the task to edit
  };

  const handleSaveEdit = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditTask(null); // Close the modal after saving
  };

  return (
    <>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography>{task.description}</Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(task)}
                    sx={{ marginLeft: 2 }}
                  >
                    Edit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {editTask && (
        <EditTaskModal
          open={!!editTask}
          task={editTask}
          handleSave={handleSaveEdit}
          handleClose={() => setEditTask(null)}
        />
      )}
    </>
  );
};

export default TaskList;
