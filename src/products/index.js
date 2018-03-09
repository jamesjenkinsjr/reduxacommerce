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
    console.log('products stuff');
    return state;
}

export default reducer;