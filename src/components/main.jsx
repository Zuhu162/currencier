import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Autocomplete,
  Button,
  Card,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import getCurrencies from "../currencies";

function Main(props) {
  const currencies = getCurrencies();

  const [curr1, setCurr1] = useState("");
  const [curr1Amt, setCurr1Amt] = useState("");
  const [curr1val, setCurr1val] = useState("");

  const [curr2, setCurr2] = useState("");
  const [curr2val, setCurr2val] = useState("");

  const [third, setThird] = useState(false);
  const [curr3, setCurr3] = useState("");
  const [curr3val, setCurr3val] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://v6.exchangerate-api.com/v6/205a2ca7e93a9c40d7e18d8e/pair/${curr1}/${curr2}`,
    })
      .then((res) => {
        setCurr2val(res.data.conversion_rate);
      })
      .catch((err) => console.log(err));
    axios({
      method: "GET",
      url: `https://v6.exchangerate-api.com/v6/205a2ca7e93a9c40d7e18d8e/pair/${curr1}/${curr3}`,
    })
      .then((res) => {
        setCurr3val(res.data.conversion_rate);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Card sx={{ padding: "30px" }}>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <TextField
              sx={{ mr: 2 }}
              id="outlined-number"
              placeholder="0.00"
              label="Amount"
              type="number"
              onChange={(e) => setCurr1Amt(e.currentTarget.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={curr1}
              onChange={(e) => setCurr1(e.target.value)}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ mr: 2 }}
              id="outlined-number"
              label="Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={(curr1Amt * curr2val).toFixed(2)}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={curr2}
              onChange={(e) => setCurr2(e.target.value)}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {third === true ? (
            <Grid item xs={12}>
              <TextField
                sx={{ mr: 2 }}
                id="outlined-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={(curr1Amt * curr3val).toFixed(2)}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={curr3}
                onChange={(e) => setCurr3(e.target.value)}
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => setThird(!third)}>
              {third === true ? "-" : "+"}
            </Button>
          </Grid>
          <Grid item xs={12}>
            {curr1 && curr2 ? (
              <h2>
                {curr1Amt} {curr1} = {(curr1Amt * curr2val).toFixed(2)} {curr2}
              </h2>
            ) : null}
            {curr1 && curr3 && third ? (
              <h2>
                {curr1Amt} {curr1} = {(curr1Amt * curr3val).toFixed(2)} {curr3}
              </h2>
            ) : null}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Main;
