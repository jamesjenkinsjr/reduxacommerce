import * as types from './types';
import * as productActions from './actions';

const initialState = {
  'ff6fdc7a-3fa1-45da-803c-b1eeedf44a05':  {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Javelin (CAUTION)',
        price: 500.00,
        count: 0
    },
   '404fba0b-2592-4999-bd20-d0bc03165214': {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Boogie Board',
        price: 100.00,
        count: 0 
    },
   '29ebcb1c-5f23-4c51-9161-b773ed52fa1f': {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Loch Ness Monster',
        price: 350.00,
        count: 0
    }
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case types.ADD_ITEM: {
            const position = action.payload.value;
            const selectedItem = state[position];
            const before = state.slice(0, position);
            const after = state.slice(position + 1);
            const newProduct = {
                ...selectedItem,
                count: selectedItem.count + 1
            };
            return [
                ...before,
                newProduct,
                ...after
            ];
        }
        case types.REMOVE_ITEM: {
            const position = action.payload.value;
            const selectedItem = state[position];
            const before = state.slice(0, position);
            const after = state.slice(position + 1);
            const newProduct = {
                ...selectedItem,
                count: selectedItem.count === 0 ? 0 : selectedItem.count - 1
            };
            return [
                ...before,
                newProduct,
                ...after
            ];
        }
        default:
            return state;
    }
}

export {
    productActions,

}

export default reducer;