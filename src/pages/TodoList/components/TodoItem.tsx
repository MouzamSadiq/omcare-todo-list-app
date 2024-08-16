import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../../../types";
import { useState } from "react";
import { AlertBox } from "../../../components/AlertBox";

interface TodoItemProps {
  task: Task; // Task object containing id and text
  deleteTask: (task: Task) => void; // Drill down function to delete a task
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask }) => {
  const [openAlert, setOpenAlert] = useState(false); // State to manage the alert dialog visibility

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => setOpenAlert(true)} // Open the alert dialog on delete button click
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        {/* Display the task text */}
        <ListItemText primary={<Typography>{task.text}</Typography>} />{" "}
      </ListItem>

      {openAlert && (
        <AlertBox
          title="Delete Task"
          description="Are you sure you want to delete this task?"
          modal={openAlert}
          handleAction={() => {
            deleteTask(task); // Call deleteTask function on confirmation
            setOpenAlert(false); // Close the alert dialog
          }}
          handleClose={() => setOpenAlert(false)} // Close the alert dialog without deleting
        />
      )}
    </>
  );
};

export default TodoItem;
