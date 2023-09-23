import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Typography,
  Paper,
  Stack,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Log } from "../../app/models/log";

interface Props {
  logData: Log;
  isAdmin: boolean;
  pwd: string;
}

export default function LiveTail({ logData, isAdmin, pwd }: Props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLivetail, setShowLivetail] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (password === pwd) {
      setShowLivetail(true);
    } else {
      setShowLivetail(false);
    }
  }, [password, pwd]);

  return (
    <>
      {!showLivetail ? (
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      ) : (
        <></>
      )}
      {showLivetail ? (
        <Paper
          sx={{
            px: 1.5,
            py: 1,
            maxHeight: 300,
            minHeight: 300,
            overflow: "auto",
          }}
        >
          {logData ? (
            logData?.events
              .slice(0)
              .reverse()
              .filter((e) => {
                if (isAdmin) {
                  return e.message;
                } else {
                  return e.message.includes("台北");
                }
                // e.message.includes("台北")
              })
              .map((e) => (
                <Stack direction="row" spacing={1} key={e.id}>
                  <Typography display="inline">
                    {e.display_received_at}
                  </Typography>
                  <Typography display="inline" sx={{ color: "#6a6bb2" }}>
                    Termin
                  </Typography>
                  <Typography display="inline" sx={{ color: "#8dbbee" }}>
                    {e.program}
                  </Typography>
                  <Typography display="inline">{e.message}</Typography>
                </Stack>
              ))
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Paper>
      ) : (
        <></>
      )}
    </>
  );
}
