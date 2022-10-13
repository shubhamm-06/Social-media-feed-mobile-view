import React from "react";
import { useState } from "react";
import UserProfile from "./User_Profile";
import "../components/feed/Feed.css";

//  Mui Imports
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import ManIcon from '@mui/icons-material/Man';

export default function UserMatch() {
  const [batch, setbatch] = useState("");
  // custom gender checkbox
  const [checked, setChecked] = useState(false);

  const [UserFound, setUserFound] = useState(false);
  const [FinalUser, setFinalUser] = useState({});
  const [message, setMessage] = useState(null);

  const post_user_match = async (e) => {
    e.preventDefault();
    const form = e.target;
    const match_data = {
      batch: form.batch.value,
      gender: form.gender.value,
      type: form.type.value,
    };
    console.log(match_data);
    const res = await fetch("/api/feed/user_match", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(match_data),
    });
    const response = await res.json();
    const { msg, success, final_user } = response;
    if (success) {
      setUserFound(true);
      setFinalUser(final_user);
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  // TODO: if (message) => render message as flash alert [frontend_task]
  // messages_type: "Something Went Wrong! Please Try Again!"...

  if (UserFound) {
    console.log(message);
    return <UserProfile final_user={FinalUser} />;
  } else {
    console.log(message);
    return (
      <>
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
            <Typography component="h1" variant="h5">
              Find Your Match.
            </Typography>
            <form onSubmit={(e) => post_user_match(e)} sx={{ mt: 1 }}>

              
              <InputLabel
                sx={{
                  m: 1,
                }}
              >
                Batch
              </InputLabel>

              <Select
                name="batch"
                required
                variant="standard"
                label="Batch"
                value={batch}
                onChange={(e) => setbatch(e.target.value)}
                sx={{
                  m: 1,
                  width: "100%",
                }}
              >
                <MenuItem value={1}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"UG22"}>UG 2022</MenuItem>
                <MenuItem value={"UG23"}>UG 2023</MenuItem>
                <MenuItem value={"UG24"}>UG 2024</MenuItem>
                <MenuItem value={"UG25"}>UG 2025</MenuItem>
                <MenuItem value={"ASP"}>ASP</MenuItem>
                <MenuItem value={"MA"}>MA</MenuItem>
                <MenuItem value={"MLS"}>MLS</MenuItem>
                <MenuItem value={"PHD"}>PHD</MenuItem>
                <MenuItem value={"Faculty"}>Faculty</MenuItem>
              </Select>

              <InputLabel
                required
                sx={{
                  m: 1,
                }}
              >
                Gender
              </InputLabel>
              <TextField name="gender" variant="standard" fullWidth required/>


              <InputLabel
                required
                sx={{
                  m: 1,
                }}
              >
                Match Type
              </InputLabel>
              <RadioGroup
                name="type"
                row
                sx={{
                  m: 1,
                }}
              >
                <Box
                sx={{
                  display:"flex"

                }}
                >
                <FormControlLabel
                sx={{
                  visibility:"hidden",
                }}
                    value="Date"
                    control={<Radio />}
                    name="type"
                    label={
                      <Box component="img"
                src="data:image/png;base64,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"

                  sx={{
                    visibility:"visible",
                    p:0,
                    m:0,
                    height: "88px",
                    width: "88px",
                    borderRadius: 500,
                  }}
                />
                    }
                  >


                </FormControlLabel>
                  {/* <ManIcon/> */}
                </Box>

                <Box>
                  <FormControlLabel
                    value="Gym buddy"
                    control={<Radio />}
                    name="type"
                    label="Gym buddy"
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    value="Mess partner"
                    control={<Radio />}
                    name="type"
                    label="Mess partner"
                  />
                </Box>
              </RadioGroup>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
              >
                Search Match
              </Button>
            </form>
          </Box>
        </Container>
      </>
    );
  }
}
