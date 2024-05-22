import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../global/Logo";
import "./Login.css";

export default function Login() {
  return (
    <div className="login_everything">
      <div className="login_topbanner">
        <Logo />
        <div>OP</div>
      </div>
      <div className="login_midbanner">
        <div className="login_exsiting">
          <div className="login_exsisting_top">Existing User</div>
          <div className="login_exsisting_mid">
            <div className="login_exsisting_user">
              Username
              <TextField
                className="login_exsisting_user_field"
                id="filled-basic"
                label="Username"
                variant="filled"
              ></TextField>
            </div>
            <div className="login_exsisting_password">
              Password
              <TextField
                className="login_exsisting_password_field"
                id="filled-password-input"
                type="password"
                label="Password"
                autoComplete="current-password"
                variant="filled"
              ></TextField>
            </div>
          </div>
          <div className="login_exsisting_bot">
            <Button className="login_exsisting_btn" variant="contained">
              LOGIN
            </Button>
          </div>
        </div>
        <div className="login_new">
          <div className="login_new_top">Register</div>
          <div className="login_new_mid">
            <div className="login_new_email">
              Email
              <TextField
                className="login_new_email_field"
                id="filled-basic"
                label="Email"
                variant="filled"
              ></TextField>
            </div>
            <div className="login_new_password">
              Password
              <TextField
                className="login_new_password_field"
                id="filled-password-input"
                type="password"
                label="Password"
                autoComplete="current-password"
                variant="filled"
              ></TextField>
            </div>
            <div className="login_new_repeat_password">
              Repeat Password
              <TextField
                className="login_new_repeat_password_field"
                id="filled-password-input"
                type="password"
                label="Repeat Password"
                autoComplete="current-password"
                variant="filled"
              ></TextField>
            </div>
          </div>
          <div className="login_new_bot">
            <Button className="login_new_btn" variant="contained">
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}