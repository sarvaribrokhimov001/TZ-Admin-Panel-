import { useState } from 'react';
import EditModal from './EditModal';
import "../styles/Table.css";
import AddModal from './AddModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import ViewModal from './ViewModal';

const Table = ({ items = [], type }) => {
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewId, setViewId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Ishonchingiz komilmi?')) {
      axios.delete(`http://localhost:3001/${type}/${id}`)
        .then(() => {
          toast.success("Item o'chirildi");
          window.location.reload();
        })
        .catch(() => {
          toast.error("O'chirishda xatolik bo'ldi");
        });
    } else {
      toast.error("Item o'chirilmadi");
    }
  };

  return (
    <div>
      {editModal && ( <EditModal setEditModal={setEditModal} editId={editId} type={type} /> )}
      {addModal && ( <AddModal setAddModal={setAddModal} type={type} /> )}
      {viewModal && ( <ViewModal setViewModal={setViewModal} viewId={viewId} type={type} /> )}

      <div className='table__add__btn__container'>
        <button onClick={() => setAddModal(true)} className='table__add__btn'> Add <span> + </span> </button>
      </div>

      <table>
        <thead>
          {type === "Products" ? (
            <tr>
              <th> ID </th>
              <th> Image </th>
              <th> Name </th>
              <th> Price </th>
              <th> Category </th>
              <th> Description </th>
              <th> Actions </th>
            </tr>
          ) : type === "Cars" ? (
            <tr>
              <th> ID </th>
              <th> Image </th>
              <th> Make </th>
              <th> Model </th>
              <th> Year </th>
              <th> Price </th>
              <th> Color </th>
              <th> Actions </th>
            </tr>
          ) : (
            <tr>
              <th> ID </th>
              <th> Avatar </th>
              <th> Name </th>
              <th> Email </th>
              <th> Role </th>
              <th> Joined </th>
              <th> Country </th>
              <th> Actions </th>
            </tr>
          )}
        </thead>

        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td> {item.id} </td>
                <td> <img src={type === "Users" ? item.avatar : item.image} width="120" height="80" alt="item" /> </td>

                {type === "Products" ? (
                  <>
                    <td> {item.name} </td>
                    <td> {item.price} $ </td>
                    <td> {item.category} </td>
                    <td> {item.description} </td>
                  </>
                ) : type === "Cars" ? (
                  <>
                    <td> {item.make} </td>
                    <td> {item.model} </td>
                    <td> {item.year} </td>
                    <td> {item.price} $ </td>
                    <td> {item.color} </td>
                  </>
                ) : (
                  <>
                    <td> {item.name} </td>
                    <td> {item.email} </td>
                    <td> {item.role} </td>
                    <td> {item.joined} </td>
                    <td> {item.country} </td>
                  </>
                )}

                <td className='table__buttons'>
                  <button className='table__view__btn' onClick={() => {
                    setViewId(item.id);
                    setViewModal(true);
                  }}>
                    View
                  </button>

                  <button className='table__edit__btn' onClick={() => {
                    setEditId(item.id);
                    setEditModal(true);
                  }}>
                    Edit
                  </button>

                  <button className='table__delete__btn' onClick={() => 
                    handleDelete(item.id)}>
                     Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8"> Ma'lumot yo'q </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;