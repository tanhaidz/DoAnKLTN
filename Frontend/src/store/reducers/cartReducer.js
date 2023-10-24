import actionTypes from '../actions/actionTypes';

const initialState = {

    cartItems: [],
    errMsg: '',
    shoppingCart: {}
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_SHOPPING_CART_SUCCESS:

            return {
                ...state,
                cartItems: action.payload,
                shoppingCart: action.payload2

            }
        case actionTypes.ADD_TO_CART:
            const existingProduct = state.cartItems.find(item => item.ProductID === action.payload.ProductID);
            if (!existingProduct) {
                let copy = { ...action.payload, CartID: state.shoppingCart.id }

                const updatedCartItems = [...state.cartItems, copy];

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }

            return state;
        case actionTypes.REMOVE_ITEM_CART:
            let copy1 = state.cartItems;
            let updatedCartItems1 = copy1.filter((cartItem) => cartItem.ProductID !== action.payload.id);



            return {
                ...state,
                cartItems: updatedCartItems1
            }
        case actionTypes.UPDATE_ITEM_CART:
            console.log(state.cartItems)
            const { id, Quantity, TotalPrice } = action.payload;
            console.log(id, Quantity, TotalPrice)
            let updatedCartItems2 = state.cartItems.map((cartItem) => {
                if (cartItem.ProductID === id) {
                    return {
                        ...cartItem,
                        Quantity: Quantity,
                        TotalPrice: TotalPrice
                    };
                }
                return cartItem;
            });
            console.log(updatedCartItems2)
            return {
                ...state,
                cartItems: updatedCartItems2,
            };


        default:
            return state;
    }
}

export default cartReducer;