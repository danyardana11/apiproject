import { useState, useEffect } from 'react';
import ProductNav from "src/Pages/Product/ProductNav";
import Post from "src/Forms/Post/Post";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/product')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-5/6 mx-auto bg-transparent">
      <ProductNav />
      <div className="grid grid-cols-5 gap-4 mt-44 mb-12 bg-transparent">
        {products.map(product => (
          <Post
            key={product.id}
            className=""
            photo={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
