import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataLayer/StateProvider";
import { auth } from '../firebase'

export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const signOut = () => {
        // [START auth_sign_out]
        auth.signOut().then(() => {
            // Sign-out successful.
            dispatch({
                type: "SET_USER",
                user: null
            })
        }).catch((error) => {
            // An error happened.
        });
        // [END auth_sign_out]
    }

    return (

        <div className="header">
            <Link to="/">

                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? <span onClick={signOut}>SignOut</span> : 'SignIn'}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>


                <Link to="/checkout">

                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>


                </Link >

            </div>

        </div>
    )
}
