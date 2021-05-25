import React from 'react';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CustomButton from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>)
                )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)
const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
});
export default connect(mapStateToProps) (CartDropdown);
