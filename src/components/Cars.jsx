import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Cars`)
      .then((data) => {
        setCars(data.data);
      });
  }, []);

  return (
    <div>
      <Table items={cars} type="Cars" />
    </div>
  );
};
export default Cars;