import useBasket from "../stores/useBasket";

const BasketDetails = () => {
  const { products } = useBasket();

  return (
    <div>
      <h1>BasketDetails</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasketDetails;
