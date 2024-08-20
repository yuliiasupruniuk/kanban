import SnackbarStore from "../store/SnackbarState";

const useSnackbar = () => {
  const isOpen = SnackbarStore((state) => state.isOpen);
  const message = SnackbarStore((state) => state.message);
  const openSnackbar = SnackbarStore((state) => state.openSnackbar);
  const closeSnackbar = SnackbarStore(
    (state) => state.closeSnackbar
  );

  return {
	isOpen,
	message,
    openSnackbar,
    closeSnackbar,
  };
};

export default useSnackbar;
