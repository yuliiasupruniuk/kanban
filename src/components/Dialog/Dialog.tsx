import { Dialog, DialogContent } from "@mui/material";
import styles from "./Dialog.module.scss";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  children: any;
  onClose: (value: string) => void;
}

const PopupDialog = ({
  open,
  selectedValue,
  children,
  onClose,
}: SimpleDialogProps) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      className={styles["dialog-container"]}
      onClose={handleClose}
      open={open}
    >
      <DialogContent className={styles.dialog}>{children}</DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
