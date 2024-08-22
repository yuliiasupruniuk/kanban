import { Control } from "react-hook-form";

export type Option = {
  label: string;
  value: string;
  [key: string]: any;
};


export type FormFieldProps ={
  name: string;
  control:  Control<any, any>;
  label: string;
  multiline?: boolean;
  rows?: number;
  select?: boolean;
  options?: Option[];
}