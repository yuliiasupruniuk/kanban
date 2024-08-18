import { Controller } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { Option } from "./types";

const FormField = ({
  name,
  control,
  label,
  multiline = false,
  rows,
  select = false,
  options = [],
}: {
  name: string;
  control: any;
  label: string;
  multiline?: boolean;
  rows?: number;
  select?: boolean;
  options?: Option[];
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        select ? (
          <Select
            {...field}
            label={label}
            className="form-field"
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
