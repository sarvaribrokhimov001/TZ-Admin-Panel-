import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/ViewModal.css";

const ViewModal = ({ setViewModal, viewId, type }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (viewId) {
      axios.get(`http://localhost:3001/${type}/${viewId}`)
        .then((res) => {
          setItem(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [viewId, type]);

  return (
    <div className="view__modal__container">
      <div className="view__modal__content">
        {item ? (
          <>
            <img className="view__modal__image" src={type === "Users" ? item.avatar : item.image} alt={item.name || item.model} />

            {type === "Products" ? (
              <>
                <h2 className="view__modal__title"> {item.name} </h2>
                <p> <span> Price: </span> {item.price} $ </p>
                <p> <span> Category: </span> {item.category} </p>
                <p> <span> Description: </span> {item.description} </p>
              </>
            ) : type === "Cars" ? (
              <>
                <h2 className="view__modal__title"> {item.make} {item.model} </h2>
                <p> <span> Year: </span> {item.year} </p>
                <p> <span> Price: </span> {item.price} $ </p>
                <p> <span> Color: </span> {item.color} </p>
              </>
            ) : (
              <>
                <h2 className="view__modal__title"> {item.name} </h2>
                <p> <span> Email: </span> {item.email} </p>
                <p> <span> Role: </span> {item.role} </p>
                <p> <span> Joined: </span> {item.joined} </p>
                <p> <span> Country: </span> {item.country} </p>
              </>
            )}
          </>
        ) : (
          <p> Loading... </p>
        )}

        <button className="view__modal__close__btn" onClick={() => setViewModal(false)}> Close </button>
      </div>
    </div>
  );
};
export default ViewModal;