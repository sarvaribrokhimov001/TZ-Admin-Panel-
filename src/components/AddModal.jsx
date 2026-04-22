import { useState } from 'react';
import "../styles/AddModal.css";
import axios from 'axios';

const AddModal = ({ setAddModal, type }) => {
  const [addFormData, setAddFormData] = useState(
    type === "Products"
      ? {
          name: "",
          price: "",
          category: "",
          image: "",
          description: ""
        }
      : type === "Cars"
      ? {
          make: "",
          model: "",
          year: "",
          price: "",
          color: "",
          image: ""
        }
      : {
          name: "",
          email: "",
          avatar: "",
          role: "",
          joined: "",
          country: ""
        }
  );

  const handleChange = (e) => {
    setAddFormData({
      ...addFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3001/${type}`, addFormData)
      .then((data) => {
        console.log(data.data);
        setAddModal(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='add__modal__container'>
      <form className='add__modal__inputs' onSubmit={handleSubmit}>
        {type === "Products" ? (
          <>
            <input onChange={handleChange} value={addFormData.name} type="text" name='name' placeholder='write product name' />
            <input onChange={handleChange} value={addFormData.price} type="number" name='price' placeholder='write product price' />
            <input onChange={handleChange} value={addFormData.category} type="text" name='category' placeholder='write product category' />
            <input onChange={handleChange} value={addFormData.image} type="url" name='image' placeholder='upload product image' />
            <input onChange={handleChange} value={addFormData.description} type="text" name='description' placeholder='write product description' />
          </>
        ) : type === "Cars" ? (
          <>
            <input onChange={handleChange} value={addFormData.make} type="text" name='make' placeholder='write car make' />
            <input onChange={handleChange} value={addFormData.model} type="text" name='model' placeholder='write car model' />
            <input onChange={handleChange} value={addFormData.year} type="number" name='year' placeholder='write car year' />
            <input onChange={handleChange} value={addFormData.price} type="number" name='price' placeholder='write car price' />
            <input onChange={handleChange} value={addFormData.color} type="text" name='color' placeholder='write car color' />
            <input onChange={handleChange} value={addFormData.image} type="url" name='image' placeholder='upload car image' />
          </>
        ) : (
          <>
            <input onChange={handleChange} value={addFormData.name} type="text" name='name' placeholder='write user name' />
            <input onChange={handleChange} value={addFormData.email} type="email" name='email' placeholder='write user email' />
            <input onChange={handleChange} value={addFormData.avatar} type="url" name='avatar' placeholder='upload user avatar' />
            <input onChange={handleChange} value={addFormData.role} type="text" name='role' placeholder='write user role' />
            <input onChange={handleChange} value={addFormData.joined} type="date" name='joined' />
            <input onChange={handleChange} value={addFormData.country} type="text" name='country' placeholder='write user country' />
          </>
        )}

        <div className='add__modal__buttons__container'>
          <button className='add__modal__submit__btn' type="submit"> Submit </button>
          <button className='add__modal__cancel__btn' type="button" onClick={() => 
            setAddModal(false)}>
               Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddModal;