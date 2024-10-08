import { Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FormFieldProps } from "./types";

const FormField = ({
  name,
  control,
  label,
  multiline = false,
  rows,
  select = false,
  options = [],
}: FormFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        select ? (
          <FormControl
            variant="outlined"
            className="form-field"
            error={!!error}
          >
            <InputLabel>{label}</InputLabel>
            <Select
              {...field}
              label={label}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "var(--primary)",
                    "& .MuiMenuItem-root": {
                      padding: 2,
                    },
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <TextField
            {...field}
            className="form-field"
            label={label}
            variant="outlined"
            multiline={multiline}
            rows={rows}
            error={!!error}
            helperText={error?.message}
          />
        )
      }
    />
  );
};

export default FormField;
