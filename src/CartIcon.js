import React from 'react';
import { connect } from 'react-redux';
import { cartIconActions } from './cart'

const CartIcon = (props) => {
    return (
        <div>
            <button onClick={() => props.toggleCart(props.cart)}>
                Cart: 
                { }
            </button>
        </div>
    );
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