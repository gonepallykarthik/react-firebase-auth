import {
  Grid,
  Grow,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { CartActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import react from "../../Images/react-img.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  media: {
    height: 140,
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    padding: "1em",
    borderRadius: "4px",
    textDecoration: "none",
    fontFamily: "sans-serif",
    fontSize: "18px",
    margin: "0 240px",
  },
}));

function Courses({ courses }) {
  const classes = useStyles();

  const token = useSelector((state) => state.Auth.token);

  const dispatch = useDispatch();

  return (
    <Grow in>
      {token ? (
        <Grid>
          <Grid item xs={12} sm={6} lg={12}>
            {courses.map((course) => (
              <Card variant="outlined">
                <CardMedia className={classes.media} image={react} />
                <CardContent>
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    style={{ marginBottom: "10px" }}
                  >
                    {course.coursename}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    style={{ marginBottom: "10px" }}
                  >
                    {course.description}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    Rs {course.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={() =>
                      dispatch(
                        CartActions.addToCart({
                          id: course.id,
                          name: course.coursename,
                          price: course.price,
                        })
                      )
                    }
                  >
                    {" "}
                    Add to Cart{" "}
                  </Button>
                  <Button color="secondary" size="small" variant="contained">
                    {" "}
                    Buy now{" "}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      ) : (
        <div>
          <Typography
            color="textPrimary"
            variant="h4"
            align="center"
            style={{ marginBottom: "50px" }}
          >
            In order to see Products you must Login
          </Typography>
          <Link className={classes.btn} to="/Signin">
            Login
          </Link>
        </div>
      )}
    </Grow>
  );
}
export default Courses;
