export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Destructive = "destructive",
}

export type ButtonProps = {
  label: string;
  type?: ButtonType;
  icon?: any;
};
