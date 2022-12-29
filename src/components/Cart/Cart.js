import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const itemsList = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsList.map((eachItem) => (
          <CartItem item={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
