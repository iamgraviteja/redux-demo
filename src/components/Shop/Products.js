import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Items = [{
  title: 'Phone',
  price: 1000,
  description: 'This is a Phone',
  id: 'phone'
}, {
  title: 'Kettle',
  price: 20,
  description: 'This is a Kettle',
  id: 'kettle'
}]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          Items.map(item => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
