import * as types from './types';

export const toggleCart = (cart) => ({
    type: types.TOGGLE_CART,
    cart: cart
});