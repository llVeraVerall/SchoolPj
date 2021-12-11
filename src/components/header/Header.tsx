import {Link} from 'react-router-dom';
import React from 'react';
import './Header.scss';

const Header = () => {

    return (
        <div className='header-wrapper'>
            <div className='header-title'>Header</div>
                <Link to='/signin' className='logout'>Logout &#10144;</Link>
        </div>);
};

export default Header;