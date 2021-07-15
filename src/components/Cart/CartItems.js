import { useSelector } from "react-redux";
import Cart from "./Cart";
import { ShoppingCart } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import "./Cart.css";
function CartItems() {
  const cartitems = useSelector((state) => state.courses.cart);

  console.log(cartitems);
  return (
    <div className="cartitems">
      {cartitems.length > 0 ? (
        cartitems.map((cart) => (
          <Cart
            key={cart.id}
            id={cart.id}
            name={cart.coursename}
            price={cart.price}
          />
        ))
      ) : (
        <div className="centered">
          <Typography variant="h2" color="textPrimary">
            Your cart is empty
          </Typography>
          <ShoppingCart style={{ fontSize: "50px" }} />
        </div>
      )}
    </div>
  );
}

export default CartItems;
