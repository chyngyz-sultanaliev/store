const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const updatedProducts = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(updatedProducts));
      return { ...state, product: updatedProducts };
    }

    case "ADD_TO_BASKET": {
      const exists = state.basket.find((item) => item.id === action.payload.id);
      if (exists) return state;
      return { ...state, basket: [...state.basket, action.payload] };
    }

    case "REMOVE_FROM_BASKET": {
      const updatedBasket = state.basket.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, basket: updatedBasket };
    }

    default:
      return state;
  }
};
