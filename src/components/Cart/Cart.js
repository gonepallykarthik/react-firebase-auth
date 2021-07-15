import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { CartActions } from "../../store/index";
import { useDispatch } from "react-redux";

function Cart(props) {
  const dispatch = useDispatch();
  const deletehandler = () => {
    dispatch(CartActions.removeFromCart({ id: props.id }));
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            {props.name}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Rs {props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" onClick={deletehandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cart;
