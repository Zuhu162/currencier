import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Nav() {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Currencier
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
