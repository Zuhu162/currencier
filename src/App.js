import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Nav from "./components/nav";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#2196f3",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav></Nav>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Main />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
