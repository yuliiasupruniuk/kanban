import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import useSnackbar from "./hook/useSnackbar";

const PositionedSnackbar = () => {
  const { isOpen, message, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeSnackbar();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isOpen}
      onClose={closeSnackbar}
      message={message}
    />
  );
};

export default PositionedSnackbar;
