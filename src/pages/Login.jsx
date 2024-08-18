import jwt_decode from "jwt-decode";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  signInStart,
  siginSuccess,
  siginFailure,
} from "../redux/user/userSlice";

import { GoogleLogin } from "@react-oauth/google";
import { adminSiginSuccess } from "../redux/user/bookingDetails/adminSlice";

const defaultTheme = createTheme();

export default function Login() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const googleSign = async (name, email) => {
    try {
      const formData = {
        name,
        email,
      };
      if (formData) {
        const response = await axios.post(
          "http://localhost:5000/api/auth/googlelogin",
          formData
        );

        if (response.data.success) {
          toast.success(response.data.message);
          toast("Redirected to home page");
          localStorage.setItem("token", response.data.data);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      const data = await res.data;
      console.log(data);
      console.log(data);
      if (data.status === "usersuccess") {
        dispatch(siginSuccess(data));
        localStorage.setItem("token", data.data);
        navigate("/");
      
        toast.success(data.message);
      } else if (data.status === "adminsuccess") {
        localStorage.setItem("admin_token",data.data.jwt_token);
        dispatch(adminSiginSuccess(data))
        navigate("/adminhome");
        toast.success(data.message);

      }else{
      dispatch(siginFailure(error.message));
      toast.error(error.message);
      }
      } 
     catch (error) {
      if(error.response.status==401) {
        toast.error("login failed ur suspended")
    }
  }};

  const handleForgotPasswordClick = () => {
    navigate("/forgot");
    console.log("Forgot Password clicked");
  };

  return (
    <div>
      {/* <header className="sticky-top">
        <DefaultLayout />
      </header> */}
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" onClick='submit' variant="h5">
              Sign Up
            </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                {error && (
                  <Typography variant="body2" color="error">
                    {error.message}
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // disabled={loading}
                >
                  {loading ? "LOGIN" : "login"}
                </Button>

                <GoogleOAuthProvider clientId="380822268085-2rhgruht8d02s8kkpgf4l2u16e8srrqf.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      const details = jwt_decode(credentialResponse.credential);
                      googleSign(details.name, details.email);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>

                <Grid container>
                  <Grid item xs>
                    <span
                      onClick={handleForgotPasswordClick}
                      style={{ cursor: "pointer" }}
                    >
                      Forgot password?
                    </span>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Dont have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
  }
