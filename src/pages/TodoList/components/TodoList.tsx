import React from "react";
import { Divider, List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";
import { Task } from "../../../types";

interface TodoListProps {
  tasks: Task[];
  deleteTask: (task: Task) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, deleteTask }) => {
  return (
    <Paper elevation={3} style={{ maxHeight: 500, overflow: "auto" }}>
      {tasks && (
        <List>
          {tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <TodoItem task={task} deleteTask={deleteTask} />
              {index < tasks.length - 1 && <Divider sx={{ width: "100%" }} />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TodoList;
