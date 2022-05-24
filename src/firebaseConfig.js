import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCWy6BPsLEC494UjZcbDu3jqJRzTDqobh8",
  authDomain: "nasie-collections.firebaseapp.com",
  projectId: "nasie-collections",
  storageBucket: "nasie-collections.appspot.com",
  messagingSenderId: "315241837932",
  appId: "1:315241837932:web:bdefe07cbae5e714ffef49",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore();

export const clothingRef = collection(db, "clothing");
export const gadgetsRef = collection(db, "gadgets");
export const footwearRef = collection(db, "footwear");
export const watchesRef = collection(db, "watches");
export const stationeryRef = collection(db, "stationery");
export const bagsRef = collection(db, "bags");

//CONSOLE LOG THE COLLECTIONS WE MADE
// export const clothingArr = ()=> {getDocs(clothingRef)
export let clothingArr = [];
getDocs(clothingRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      clothingArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(clothingArr);
  })
  .catch((err) => {
    console.log(err);
  });

export let bagsArr = [];
getDocs(bagsRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      bagsArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(bagsArr);
  })
  .catch((err) => {
    console.log(err);
  });

export let footwearArr = [];
getDocs(footwearRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      footwearArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(footwearArr);
  })
  .catch((err) => {
    console.log(err);
  });

export let gadgetsArr = [];
getDocs(gadgetsRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      gadgetsArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(gadgetsArr);
  })
  .catch((err) => {
    console.log(err);
  });

export let watchesArr = [];
getDocs(watchesRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      watchesArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(watchesArr);
  })
  .catch((err) => {
    console.log(err);
  });

export let stationeryArr = [];
getDocs(stationeryRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      stationeryArr.push({ ...doc.data(), id: doc.id });
    });
    console.log(stationeryArr);
  })
  .catch((err) => {
    console.log(err);
  });
