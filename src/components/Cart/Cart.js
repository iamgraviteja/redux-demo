import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const items = useSelector(state => state.cart.items);
  console.log('items',items);
  return (
    <Card className={classes.cart} >
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => {
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.count,
                total: item.itemTotal,
                price: item.price
              }}
            />
          )
        })}

      </ul>
      {items.length > 0 && <h4 style={{ textAlign: 'right' }}>Total: {items.reduce((a, c) => a + c.itemTotal,0)}</h4>}
    </Card>
  );
};

export default Cart;
