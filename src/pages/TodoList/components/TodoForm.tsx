import { TextField, Button, Box } from "@mui/material";
import { FormEvent } from "react";

interface TodoFormProps {
  addTask: (task: string) => void; // Function to add a new task
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.target as HTMLFormElement; // Typecast the event target to HTMLFormElement
    const task = (
      form.elements.namedItem("task") as HTMLInputElement
    ).value.trim(); // Get the value of the input field and trim any whitespace

    if (task) {
      addTask(task); // Call the addTask function with the task value
      form.reset(); // Clear the form input field after successful submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", gap: 2 }} my={2}>
        <TextField
          name="task" // Adding a name to the input field for form handling
          variant="outlined"
          fullWidth
          required // Ensures the field is not empty before submission
          placeholder="What is the task today?"
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;
