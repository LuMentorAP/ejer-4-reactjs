/* eslint-disable react/prop-types */
import "./../styles/ProductList.css";

export default function ProductList({ productos, addToCart }) {
  return (
    <div className="product-list">
      <h2 className="text-center">Nuestros Productos</h2>
      <ul>
        {productos.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
