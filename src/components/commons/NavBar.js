import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    const NavBarStyle = {
        border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }


    return (
        <div style={NavBarStyle}>
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/mypage">MyPage</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}

export default NavBar;