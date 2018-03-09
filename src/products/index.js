import * as types from './types';

const initialState = [
    {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Javelin (CAUTION)',
        price: 500.00,
        count: 0
    },
    {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Boogie Board',
        price: 100.00,
        count: 0 
    },
    {
        imgSource: 'https://via.placeholder.com/100x100',
        name: 'Loch Ness Monster',
        price: 350.00,
        count: 0
    }
];

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

export default reducer;