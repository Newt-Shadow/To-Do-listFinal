import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddTaskModal = ({ open, handleClose, setTasks }) => {
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
    handleClose();
    setTitle('');
    setDescription('');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Add a New Task</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Task
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
