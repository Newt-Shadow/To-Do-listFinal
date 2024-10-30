import React, { useState } from 'react';
import { TextField, Button, Card } from '@mui/material';

const AddTask = ({ setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both the title and description.");
      return;
    }

    const newTask = { title, description, id: Date.now() };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to localStorage
    setTitle(''); // Clear input
    setDescription(''); // Clear input
  };

  return (
    <Card sx={{ padding: 3, marginBottom: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Task
        </Button>
      </form>
    </Card>
  );
};

export default AddTask;
