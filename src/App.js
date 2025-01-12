import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { toggleMode } from './store/ui-slice';

function App() {
  const isCartVisible = useSelector(state => state.ui.cartIsVisible);
  const mode = useSelector(state => state.ui.mode);
const dispatch = useDispatch();

useEffect(() => {
    document.documentElement.className = mode;
}, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Listener for changes in the system theme preference
    const handleChange = (e) => {
      dispatch(toggleMode(e.matches ? 'dark' : 'light'));
    };

    // Add listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);


  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
