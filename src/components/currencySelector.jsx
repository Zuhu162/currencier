import { MenuItem, TextField } from "@mui/material";
import React from "react";

function CurrencySelector(props) {
  return (
    <div>
      <TextField
        sx={{ mr: 2 }}
        id="outlined-number"
        placeholder="0.00"
        label="Amount"
        type="number"
        onChange={(e) => props.setCurrAmt(e.currentTarget.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={props.curr}
        onChange={(e) => props.setCurr(e.target.value)}
        helperText="Please select your currency"
      >
        {props.currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default CurrencySelector;
