import React, { useState } from "react";
import UniversalLogo from "./UniversalLogo";
import { getStorage, ref, deleteObject } from "firebase/storage";
import './CSS/deleteproducts.css'

function DeleteProducts() {
  const storage = getStorage();

  const [id, setId] = useState("");

  function remove() {
    //   // Create a reference to the file to delete
    //   const desertRef = ref(storage, "images/desert.jpg");
    //   // Delete the file
    //   deleteObject(desertRef)
    //     .then(() => {
    //       // File deleted successfully
    //     })
    //     .catch((error) => {
    //       // Uh-oh, an error occurred!
    //     });
  }

  return (
    <div className="delete-products-main">
      <UniversalLogo />
      <div className="delete-products-div">
        <h1>Delete Products</h1>
        <form className="form">
          <label htmlFor="product-id">Product ID</label>
          <input
            type="text"
            className="delete-product-id"
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
          <button onClick={remove}>Delete</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProducts;
