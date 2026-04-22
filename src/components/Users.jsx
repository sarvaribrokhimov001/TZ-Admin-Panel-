import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './Table';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Users`)
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Table items={users} type="Users" />
    </div>
  );
};
export default Users;