import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Products`)
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      <Table items={products} type="Products" />
    </div>
  );
};
export default Products;