import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <h1>My React Chrome Extension</h1>
      <TextField
        label="Type something"
        variant="outlined"
        value={text}
        onChange={handleChange}
        fullWidth
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
