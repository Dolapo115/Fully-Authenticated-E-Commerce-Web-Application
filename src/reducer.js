//import { alertClasses } from "@mui/material";

export const initialState = {
  username: null,
  userDp: null,
  userId: '',
  loginStatus: false,
  isAdmin: false,
  clothing: [],
  stationery: [],
  footwear: [],
  watches: [],
  bags: [],
  gadgets: [],
  bestselling: [],
  availabile: 0,
  wishlist: [],
  cart: [],
  cartTotal: 0,
  selectedCategory: "clothing",
  categoryFlag: false,
};

export default function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "Home_PATH":
      return {
        ...state,
        username: action.username,
      };

    case "USER_DP":
      return {
        ...state,
        userDp: action.userDp,
      };

    case "USERNAME":
      return {
        ...state,
        username: action.username,
      };

    case "USER_ID":
      return {
        ...state,
        userId: action.userId,
      };

    case "CLOTHING":
      return {
        ...state,
        clothing: action.clothing,
      };

    case "STATIONERY":
      return {
        ...state,
        stationery: action.stationery,
      };

    case "FOOTWEAR":
      return {
        ...state,
        footwear: action.footwear,
      };
    case "WATCHES":
      return {
        ...state,
        watches: action.watches,
      };
    case "BAGS":
      return {
        ...state,
        bags: action.bags,
      };
    case "GADGETS":
      return {
        ...state,
        gadgets: action.gadgets,
      };
    case "BESTSELLING":
      return {
        ...state,
        bestselling: action.bestselling,
      };

    case "AVAILABLE":
      return {
        ...state,
        available: action.available,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: action.cart,
      };

    case "CART_TOTAL":
      console.log(state.cartTotal)
      return {
        ...state,
        cartTotal: state.cartTotal + action.price,
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      //alert("Removed!");
      } else {
        alert(`Cant remove product with id: ${action.id}: Not in cart!`);
      }

      return {
        ...state,
        cart: newCart,
        cartTotal: state.cartTotal - action.price
      };

    case "LOGGED_IN":
      return {
        ...state,
        loginStatus: action.loginStatus,
      };

    case "IS_ADMIN":
      return {
        ...state,
        isAdmin: action.isAdmin,
      };

    case "SWITCH_CATEGORY":
      return {
        ...state,
        selectedCategory: action.selectedCategory,
      };

    case "CATEGORY_FLAG":
      return {
        ...state,
        categoryFlag: action.categoryFlag,
      };

    default:
      return state;
  }
}
