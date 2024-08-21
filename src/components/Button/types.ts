export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Destructive = "destructive",
}

export type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" ;
  btnStyle?: ButtonType;
  isLoading?: boolean;
  icon?: any;
  className?: string;
  onClick?: () => void;
};
