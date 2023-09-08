import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [isBtnHighLighted, setIsBtnHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const cartItemCnt = items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        isBtnHighLighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) return;
        setIsBtnHighLighted(true);
        const timer = setTimeout(() => {
            setIsBtnHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemCnt}</span>
        </button>
    );
};
export default HeaderCartButton;
