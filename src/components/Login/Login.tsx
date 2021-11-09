import React, {FormEvent} from "react";
import {useAuthDispatch} from "../../state/context";
import {login} from "../../state/actions";
import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const {dispatch} = useAuthDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const username = data.get('username')?.toString();
      const password = data.get('password')?.toString();
      if (username && password) {
          login(dispatch, {username, password});
      }
  }

  return(
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
      </Box>
  )
}

export default Login;
