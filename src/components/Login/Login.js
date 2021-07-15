import {
  Card,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { authActions } from "../../store/Auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const usestyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  InnerContainer: {
    boxShadow: "0 0 20px black",
    padding: "2em",
  },
  inpt: {
    margin: "10px auto",
  },
  btn: {
    margin: "8px 70px",
    textAlign: "center",
  },
  signup: {
    cursor: "pointer",
  },
}));
function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = usestyles();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState(false);

  const toggleHandler = () => {
    setlogin((prevState) => !prevState);
  };

  const submithandler = async (e) => {
    e.preventDefault();

    //sign up
    if (!login) {
      try {
        const res = await fetch(process.env.REACT_APP_URL, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error.message);
        }

        dispatch(authActions.verifyUser(data.idToken));
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        const res = await fetch(process.env.REACT_APP_URL, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        dispatch(authActions.verifyUser(data.idToken));
      } catch (e) {
        alert(e);
      }
    }
    history.push("/");
    setemail("");
    setpassword("");
  };

  return (
    <div className={classes.container}>
      <Card variant="elevation" className={classes.InnerContainer}>
        <form onSubmit={submithandler}>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            className={classes.inpt}
          >
            {!login ? "Sign up" : "Login"}
          </Typography>
          <TextField
            color="primary"
            variant="outlined"
            label="email"
            type="email"
            className={classes.inpt}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />{" "}
          <br />
          <TextField
            color="primary"
            variant="outlined"
            label="password"
            type="password"
            value={password}
            className={classes.inpt}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <Button
            className={classes.btn}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Submit
          </Button>
          <Typography
            variant="body2"
            align="center"
            color="textPrimary"
            className={classes.signup}
            onClick={toggleHandler}
          >
            {!login ? "Already a User ?  Login " : "Create a Account Signup"}
          </Typography>
        </form>
      </Card>
    </div>
  );
}
export default Login;
