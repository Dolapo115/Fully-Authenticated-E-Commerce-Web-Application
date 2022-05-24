import React, { useState, useEffect } from "react";
import UniversalLogo from "./UniversalLogo";
import "./CSS/addproducts.css";
import { addDoc } from "firebase/firestore";
import {Link} from 'react-router-dom'
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import {
  clothingRef,
  gadgetsRef,
  bagsRef,
  footwearRef,
  stationeryRef,
  watchesRef,
} from "./firebaseConfig";

function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState('Clothing');
  const [productAvailability, setProductAvailability] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productID, setProductID] = useState(null);
  //const [productImageURL, setProductImageURL] = useState("");
  //USED THIS TO TRIGGER THE USEEFFECT HOOK THAT SWITCHES CATEGORIES, SO THE PRODUCTS UPLOADED END UP IN THEIR PROPER PLACES ON THE FIRESTORE DATABASE
  const [uploadFlag, setUploadFlag] = useState(0);

  //HANDLES IMAGE PROCESSING
  function productImgHandler(e) {
    let selectedFile = e.target.files[0];
    setProductImage(selectedFile);
  }

  //DECLARES A REFERENCE TO FIREBASE STORAGE
  const storage = getStorage();

  //DECLARES THE REFERENCES IN FIREBASE STORAGE
  let clothingImageRef;
  let footwearImageRef;
  let gadgetsImageRef;
  let watchesImageRef;
  let stationeryImageRef;
  let bagsImageRef;

  useEffect(() => {
    function truncate(foo, bar, bat) {
      //SPECIFIES WHERE THE FILE SHOULD GO, AND GIVES EACH FILE A NAME WITH A RANDOM NUMBER
      foo = ref(storage, `${bar}/image${Math.floor(Math.random() * 1000000)}`);
      const uploadTask = uploadBytesResumable(foo, productImage, null);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + Number(progress) + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
          if (progress === 100) {
            alert("Uploaded Successfully!");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("File available at", url);
            //setProductImageURL(url);
            addDoc(bat, {
              name: productName,
              desc: productDesc,
              price: parseInt(productPrice),
              availabilty: productAvailability,
              //id: Math.floor(math.random() * 100000000),
              imgUrl: url,
            });
          });
          //CLEARS THE INPUT FIELDS
          setProductName("");
          setProductDesc("");
          setProductPrice("");
          setProductAvailability("");
          setProductImage(null);
        }
      );
    }

    //SWITCHES CATEGORIES, SO THE ADD PRODUCTS PAGE SENDS THE PROPER PRODUCTS TO THEIR PROPER PLACE
    if(uploadFlag !==0){
      if (productCategory === "Clothing") {
        truncate(clothingImageRef, "clothing", clothingRef);
      } else if (productCategory === "Footwear") {
        truncate(footwearImageRef, "footwear", footwearRef);
      } else if (productCategory === "Gadgets") {
        truncate(gadgetsImageRef, "gadgets", gadgetsRef);
      } else if (productCategory === "Watches") {
        truncate(watchesImageRef, "watches", watchesRef);
      } else if (productCategory === "Stationery") {
        truncate(stationeryImageRef, "stationery", stationeryRef);
      } else if (productCategory === "Bags") {
        truncate(bagsImageRef, "bags", bagsRef);
      }
    }
    
  }, [uploadFlag]);

  return (
    <div className="add-products-main">
      <UniversalLogo />
      <div className="add-products-div">
        <h1>Add Products</h1>
        <form
          autocomplete="off"
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className='product-name-container'>
            <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            className="product-name-add"
            required
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            value={productName}
          />
          </div>
          
          <br />
          <label htmlFor="product-type">Category</label>
          <select
            className="category"
            name={productCategory}
            value={productCategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
          >
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Stationery">Stationery</option>
            <option value="Watches">Watches</option>
            <option value="Bags">Bags</option>
            <option value="Gadgets">Gadgets</option>
          </select>
          <br />
          <div className = 'product-desc-container'>
            <label htmlFor="product-name">Product Desc</label>
          <input
            type="text"
            className="product-description"
            maxlength = '200'
            required
            onChange={(e) => {
              setProductDesc(e.target.value);
            }}
            value={productDesc}
          />
          </div>
          <br />
          <label htmlFor="product-name">Product Price</label>
          <input
            type="number"
            className="product-price"
            required
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            value={productPrice}
          />
          <br />
          <label htmlFor="product-name">Number Available</label>
          <input
            type="number"
            className="product-availability"
            required
            onChange={(e) => {
              setProductAvailability(e.target.value);
            }}
            value={productAvailability}
          />
          <br />
          <label htmlFor="product-name">Upload File</label>
          <input
            type="file"
            className="file-upload"
            required
            accept="image/x-png,image/gif,image/jpeg, image/jpg"
            onChange={productImgHandler}
          />
          <button
            onClick={() => {
              setUploadFlag(uploadFlag + 1);
              //reset();
            }}
          >
            Upload
          </button>
        </form>
      </div>
      <Link to = '/home'>
      <button className = 'return-to-shop'>Return to Shop</button>
      </Link>
    </div>
  );
}

export default AddProducts;
