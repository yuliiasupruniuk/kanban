import { Dialog, DialogContent } from "@mui/material";
import "./Dialog.scss";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  children: any;
  onClose: (value: string) => void;
}

const PopupDialog = ({open, selectedValue, children, onClose}: SimpleDialogProps) => {

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog className="dialog-container" onClose={handleClose} open={open}>
      <DialogContent className="dialog">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
