import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/EditModal.css";

const EditModal = ({ setEditModal, editId, type }) => {
  const [formData, setFormData] = useState(
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

  useEffect(() => {
    axios.get(`http://localhost:3001/${type}/${editId}`)
      .then((data) => {
        const response = data.data;

        if (type === "Products") {
          setFormData({
            name: response?.name || "",
            price: response?.price || "",
            image: response?.image || "",
            category: response?.category || "",
            description: response?.description || ""
          });
        } else if (type === "Cars") {
          setFormData({
            make: response?.make || "",
            model: response?.model || "",
            year: response?.year || "",
            price: response?.price || "",
            color: response?.color || "",
            image: response?.image || ""
          });
        } else {
          setFormData({
            name: response?.name || "",
            email: response?.email || "",
            avatar: response?.avatar || "",
            role: response?.role || "",
            joined: response?.joined || "",
            country: response?.country || ""
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editId, type]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/${type}/${editId}`, formData)
      .then((data) => {
        console.log(data);
        setEditModal(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='edit__modal__container'>
      <form className='edit__modal__inputs' onSubmit={handleSubmit}>
        {type === "Products" ? (
          <>
            <input value={formData.name} onChange={handleChange} type="text" placeholder='write product name' name='name' />
            <input value={formData.price} onChange={handleChange} type="number" placeholder='write product price' name='price' />
            <input value={formData.category} onChange={handleChange} type="text" placeholder='write product category' name='category' />
            <input value={formData.image} onChange={handleChange} type="url" placeholder='upload product image' name='image' />
            <input value={formData.description} onChange={handleChange} type="text" placeholder='write product description' name='description' />
          </>
        ) : type === "Cars" ? (
          <>
            <input value={formData.make} onChange={handleChange} type="text" placeholder='write car make' name='make' />
            <input value={formData.model} onChange={handleChange} type="text" placeholder='write car model' name='model' />
            <input value={formData.year} onChange={handleChange} type="number" placeholder='write car year' name='year' />
            <input value={formData.price} onChange={handleChange} type="number" placeholder='write car price' name='price' />
            <input value={formData.color} onChange={handleChange} type="text" placeholder='write car color' name='color' />
            <input value={formData.image} onChange={handleChange} type="url" placeholder='upload car image' name='image' />
          </>
        ) : (
          <>
            <input value={formData.name} onChange={handleChange} type="text" placeholder='write user name' name='name' />
            <input value={formData.email} onChange={handleChange} type="email" placeholder='write user email' name='email' />
            <input value={formData.avatar} onChange={handleChange} type="url" placeholder='upload user avatar' name='avatar' />
            <input value={formData.role} onChange={handleChange} type="text" placeholder='write user role' name='role' />
            <input value={formData.joined} onChange={handleChange} type="date" name='joined' />
            <input value={formData.country} onChange={handleChange} type="text" placeholder='write user country' name='country' />
          </>
        )}

        <div className='edit__modal__buttons__container'>
          <button className='edit__modal__submit__btn' type="submit"> Submit </button>
          <button className='edit__modal__cancel__btn' type="button" onClick={() => 
            setEditModal(false)}>
              Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;