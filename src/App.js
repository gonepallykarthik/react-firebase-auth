import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import Courses from "./components/courses/courses";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route } from "react-router-dom";
import CartItems from "./components/Cart/CartItems";
import Login from "./components/Login/Login";
import { authActions } from "./store/Auth";

const useStyles = makeStyles(() => ({
  items: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  spacing: {
    margin: "0 60px",
    textDecoration: "none",
    color: "white",
  },
  appbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    margin: "0 50px",
    color: "white",
    textDecoration: "none",
  },
}));

function App() {
  const dispatch = useDispatch();
  const totalLenght = useSelector((state) => state.courses.total);
  const token = useSelector((state) => state.Auth.token);

  const classes = useStyles();
  const [courses] = useState([
    {
      id: 1,
      coursename: "React",
      price: 500,
      instructor: "karthik",
      description:
        "Learn React by building amazing projects and real-time projects and it is developed by facebook team by far the most popular framework",
    },
    {
      id: 2,
      coursename: "Angular",
      price: 600,
      instructor: "some",
      description:
        "Learn Angular by bulding real-time projects and it is developed and maintained by Google",
    },
    {
      id: 3,
      coursename: "Vue",
      price: 499,
      instructor: "karthik",
      description:
        "Learn Vue by building real-time projects and amazing userInterfaces",
    },
    {
      id: 4,
      coursename: "javascript",
      price: 399,
      instructor: "karthik",
      description: "Learn javascript by building  real-world projects",
    },
  ]);

  return (
    <>
      <AppBar color="primary" variant="outlined" className={classes.appbar}>
        <Toolbar className={classes.items}>
          <Typography
            variant="h4"
            color="textPrimary"
            style={{ color: "white" }}
            className={classes.title}
          >
            <Link to="/" className={classes.title}>
              COURSES
            </Link>
          </Typography>

          {token && (
            <Typography variant="h6" style={{ color: "white" }}>
              <Link className={classes.spacing} to="/cart">
                Cart({totalLenght})
              </Link>
            </Typography>
          )}

          <Typography
            className={classes.spacing}
            variant="h6"
            style={{ color: "white" }}
            onClick={() => dispatch(authActions.Logout())}
          >
            <Link to="/Signin" className={classes.spacing}>
              {token ? "Logout" : "Sign in"}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Route path="/cart" exact>
        <CartItems />
      </Route>
      <Route path="/" exact>
        <Container maxWidth="sm">
          <div style={{ marginTop: "100px" }}>
            <Courses courses={courses} />
          </div>
        </Container>
      </Route>
      <Route path="/Signin" exact>
        <Login />
      </Route>
    </>
  );
}

export default App;
