import create from "zustand";

type SnackbarState = {
  isOpen: boolean;
  message: string;
  openSnackbar: (message: string) => void;
  closeSnackbar: () => void;
};

const SnackbarStore = create<SnackbarState>((set) => ({
  isOpen: false,
  message: "",
  openSnackbar: (message) =>
    set({
      isOpen: true,
      message,
    }),
  closeSnackbar: () =>
    set({
      isOpen: false,
      message: "",
    }),
}));

export default SnackbarStore;
