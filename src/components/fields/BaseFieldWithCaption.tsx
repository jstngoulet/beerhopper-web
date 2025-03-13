import React from "react";
import { TextField, Box } from "@mui/material";
import theme from "../Theme";

interface TextFieldWithCaptionProps {
  errorMessage?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onExit?: () => void;
  disabled?: boolean;
  onReturn?: () => void;
}

const TextFieldWithCaption: React.FC<TextFieldWithCaptionProps> = ({
  errorMessage,
  label,
  placeholder,
  value,
  onChange,
  onExit,
  disabled,
  onReturn
}) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && onReturn) {
        onReturn(); // Trigger the onReturn callback if provided
      }
    };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue); // Pass the updated value to the parent
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        error={!!errorMessage && value.length === 0}
        helperText={value.length === 0 ? errorMessage : ""}
        fullWidth
        disabled={disabled === true}
        variant="outlined"
        onBlur={onExit}
        onKeyUp={handleKeyPress}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: theme.palette.background.paper,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.divider,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
};

export default TextFieldWithCaption;
