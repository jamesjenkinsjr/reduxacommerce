import React from 'react';

const Product = props => {
    return(
        <li>
            <img src={props.imgSource} alt={props.name}/>
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button onClick={() => console.log('+')}>+</button>
            <p>{props.count}</p>
            <button onClick={() => console.log('-')}>-</button>
        </li>
    );
}

export default Product;