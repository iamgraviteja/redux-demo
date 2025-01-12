import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCount = useSelector(state => state.cart.cartCount);
  const handleOnClick = () => {
    dispatch(toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleOnClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
