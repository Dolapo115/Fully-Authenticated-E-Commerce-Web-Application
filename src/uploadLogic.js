import {
  productName,
  productDesc,
  productPrice,
  productCategory,
  productImage,
  productImageURL,
  productAvailability,
  error
} from "./AddProducts";
import { addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import {
  clothingRef,
  gadgetsRef,
  bagsRef,
  footwearRef,
  stationeryRef,
  watchesRef,
} from "./firebaseConfig";


const storage = getStorage();
const clothingImageRef = ref(storage);
const footwearImageRef = ref(storage);
const watchesImageRef = ref(storage);
const gadgetsImageRef = ref(storage);
const bagsImageRef = ref(storage);
const stationeryImageRef = ref(storage);

//FUNCTION TO SUBMIT ADDED PRODUCT
function upload(e) {
  e.preventDefault();
  if (productCategory === "Clothing") {
    clothingImageRef(`clothing/${productImage.name}`).put(productImage);
    () => {
      clothingImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(clothingRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  } else if (productCategory === "Footwear") {
    clothingImageRef(`footwear/${productImage.name}`).put(productImage);
    () => {
      footwearImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(footwearRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  } else if (productCategory === "Gadgets") {
    clothingImageRef(`gadgets/${productImage.name}`).put(productImage);
    () => {
      gadgetsImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(gadgetsRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  } else if (productCategory === "Watches") {
    watchesImageRef(`clothing/${productImage.name}`).put(productImage);
    () => {
      watchesImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(watchesRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  } else if (productCategory === "Stationery") {
    stationeryImageRef(`clothing/${productImage.name}`).put(productImage);
    () => {
      stationeryImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(stationeryRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  } else if (productCategory === "Bags") {
    bagsImageRef(`clothing/${productImage.name}`).put(productImage);
    () => {
      bagsImageRef
        .child(productImage.name)
        .getDownloadURL()
        .then((url) => {
          setProductImageURL(url);
          addDoc(bagsRef, {
            name: productName,
            desc: productDesc,
            price: productPrice,
            availabiltty: productAvailability,
            image: productImageURL,
          });
        });
    };
  }
  alert("uploaded!");
}