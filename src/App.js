import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import CartIcon from './CartIcon';
import CartList from './CartList';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Swag Shack</h1>
        <SearchBar/>
        <CartIcon />
        {this.props.cart === true 
        ? <ProductList searchTerm={this.props.search} products={this.props.products}/>
        : <CartList/>}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default  connect (mapStateToProps, mapDispatchToProps)(App);
