import React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
// Custom Theme & Color
const theme = createTheme({
  palette: {
    primary: {
      main: "#a70e13",
    },
    secondary: {
      main: "#bd0f15",
    },
    white: {
      main: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: [
      "Amiko",
      "Covered By Your Grace",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
  },
});

export default function Login() {
  const navigate = useNavigate();

  const post_login_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      email: form.email.value,
      password: form.password.value,
    };
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      navigate("/feed");
    } else {
      console.log(msg);
    }
  };

  // TODO: if (message) => render message as flash alert
  // message_type: "Email Not Found! Please Register First!"...

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            sx={{
              fontSize: "50px",
              fontWeight: "bold",
              letterSpacing: "7px",
              Color: "secondary",
              mb: 3,
              fontFamily: "Covered By Your Grace",
            }}
          >
            hookedu
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={(e) => post_login_data(e)} sx={{ mt: 1 }}>
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              method="get"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/hook" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
    </>
  );
}
