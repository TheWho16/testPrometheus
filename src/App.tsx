import React from "react";
import Pages from "./pages/Pages";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Pages />
    </ThemeProvider>
  );
}

export default App;
