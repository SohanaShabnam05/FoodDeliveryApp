import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const HeaderCartButton = props => {
    return
    <button className={classes.button}>
        <span className={classes.icon}>
        {/* <ShoppingCartIcon  /> */}
        <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
};

export default HeaderCartButton;