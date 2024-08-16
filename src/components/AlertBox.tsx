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
  title: string;
  description: string;
  modal: boolean;
  handleAction: () => void;
  handleClose: () => void;
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
      PaperProps={{ sx: { borderRadius: "10px" } }}
      open={modal}
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {},
      }}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
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
          {title}
        </DialogTitle>
        <Divider variant="middle" sx={{ width: "100%" }} />
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            style={{ textAlign: "center" }}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleAction()}
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
