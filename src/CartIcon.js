import React from 'react';
import { connect } from 'react-redux';
import { cartIconActions } from './cart'

const CartIcon = (props) => {
    return (
        <div>
            <button onClick={() => props.toggleCart(props.cart)}>
                Cart: {cartTally(props)}
                
            </button>
        </div>
    );
}

const cartTally = (props) => { 
    const counts = Object.keys(props.products).map(id => {
    const cartCounts = props.products[id].count;
    return cartCounts;
    })
    let sum = 0;
    counts.forEach(count => {
        sum += count;    
    });
    return sum;
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        toggleCart: cart => dispatch(cartIconActions.toggleCart(cart))
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);