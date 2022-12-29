import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 6.25,
    title: "My second book",
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    price: 6.25,
    title: "My third book",
    description: "The third book I ever wrote",
  },
  {
    id: "p4",
    price: 6.25,
    title: "My fourth book",
    description: "The fourth book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((eachProduct) => (
          <ProductItem
            key={eachProduct.id}
            id={eachProduct.id}
            title={eachProduct.title}
            price={eachProduct.price}
            description={eachProduct.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
