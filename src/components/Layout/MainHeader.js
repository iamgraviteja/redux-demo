import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../store/ui-slice';

const MainHeader = (props) => {

const dispatch = useDispatch();
const mode = useSelector(state => state.ui.mode);

const handleMode = () => {
    dispatch(toggleMode());
}
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <button onClick={handleMode}>{mode === 'dark' ? 'Light Mode': 'Dark Mode'}</button>
      </nav>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
