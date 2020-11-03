import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div className="Header">
            <Link to="/">
                <h2>Shoply</h2>
            </Link> 
        <div className="Nav-Group">
            <Link to="/cart">
                <h4>Cart</h4>
            </Link>
        </div>

        </div>
    )
}

export default Header;