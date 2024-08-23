import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useCountStore } from "../store/count";
import { Typography } from "@mui/material";

export const Login = () => {
  const { count, increaseCount } = useCountStore();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleClick = () => {
    chrome.tabs.query({}, (tabs) => {
      const activeWeb = tabs?.find(({ url }) =>
        url?.includes("https://www.amazon.com/")
      );
      if (!activeWeb) return;
      chrome.scripting.executeScript({
        target: { tabId: activeWeb?.id || 0 },
        func: insertHelloWorld,
      });
    });
  };

  const insertHelloWorld = () => {
    const element: any = document.getElementById("apex_desktop");
    const helloWorldDiv = document.createElement("div");
    helloWorldDiv.innerText = "¡Hola, mundo!";
    helloWorldDiv.style.fontSize = "24px";
    helloWorldDiv.style.color = "blue";
    helloWorldDiv.style.textAlign = "center";
    helloWorldDiv.style.marginTop = "20px";
    element.innerHTML = "<h1>hello world!</h1>";
    document.body.appendChild(helloWorldDiv);
  };

  return (
    <Box sx={{ p: 2 }}>
      <h1>My React Extension</h1>
      <TextField
        label="Type something"
        variant="outlined"
        value={text}
        onChange={handleChange}
        fullWidth
      />
      <Button
        id="insert-html"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleClick}
      >
        Insert HTML
      </Button>

      <Button
        id="insert-html"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleNavigate}
      >
        Submit
      </Button>

      <Button
        id="count"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={increaseCount}
      >
        Count
      </Button>
      <Typography>Count: {count}</Typography>
    </Box>
  );
};
