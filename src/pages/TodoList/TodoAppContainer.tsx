import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { generateUniqueId } from "../../utils/helper";
import { Task } from "../../types";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const TodoAppContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to add a new task
  const addTask = (task: string) => {
    const newTask: Task = {
      id: generateUniqueId(),
      text: task,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          border: "1px solid #fff",
          borderRadius: "8px",
          boxShadow: 3,
          p: 2,
        }}
      >
        {/* Title of the Todo List */}
        <Typography variant="h4" gutterBottom>
          T O D O
        </Typography>
        {/* Theme switcher component */}
        <ThemeSwitcher />
        {/* Form to add new tasks */}
        <TodoForm addTask={addTask} />
        {/* List of tasks */}
        {tasks.length ? (
          <TodoList tasks={tasks} deleteTask={deleteTask} />
        ) : null}
      </Box>
    </Container>
  );
};

export default TodoAppContainer;
