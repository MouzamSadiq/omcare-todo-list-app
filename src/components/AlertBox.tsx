import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
  Box,
} from "@mui/material";

export interface AlertBoxProps {
  title: string; // Title of the alert dialog
  description: string; // Description text of the alert dialog
  modal: boolean; // Boolean to control the visibility of the dialog
  handleAction: () => void; // Function to handle the action on confirmation
  handleClose: () => void; // Function to handle the dialog close action
}

export const AlertBox: React.FC<AlertBoxProps> = ({
  title,
  description,
  modal,
  handleAction,
  handleClose,
}) => {
  return (
    <Dialog
      PaperProps={{ sx: { borderRadius: "10px" } }} // Custom styling for the dialog paper
      open={modal} // Control the visibility of the dialog
      sx={{
        backdropFilter: "blur(5px) sepia(5%)", // Apply blur and sepia filter to the backdrop
        "& .MuiDialog-paper": {},
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px 5px",
        }}
      >
        <DialogTitle id="dialog-title" style={{ fontSize: "20px" }}>
          {title} {/* Display the title of the dialog */}
        </DialogTitle>
        <Divider variant="middle" sx={{ width: "100%" }} />
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            style={{ textAlign: "center" }}
          >
            {description} {/* Display the description of the dialog */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleAction()} // Call handleAction on confirmation
          >
            Yes
          </Button>
          <Button variant="contained" onClick={() => handleClose()}>
            No
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
