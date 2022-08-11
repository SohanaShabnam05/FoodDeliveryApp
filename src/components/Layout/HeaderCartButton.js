import { useContext } from 'react';

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        {/* <ShoppingCartIcon  /> */}
        <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
    )
};

export default HeaderCartButton;