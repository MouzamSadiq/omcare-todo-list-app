import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../../../types";
import { useState } from "react";
import { AlertBox } from "../../../components/AlertBox";

interface TodoItemProps {
  task: Task;
  deleteTask: (task: Task) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask }) => {
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => setOpenAlert(true)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={<Typography>{task.text}</Typography>} />
      </ListItem>

      {openAlert && (
        <AlertBox
          title="Delete Task"
          description="Are you sure you want to delete this task?"
          modal={openAlert}
          handleAction={() => {
            deleteTask(task);
            setOpenAlert(false);
          }}
          handleClose={() => setOpenAlert(false)}
        />
      )}
    </>
  );
};

export default TodoItem;
