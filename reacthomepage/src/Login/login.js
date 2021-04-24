import React from 'react';
import './login.css';
import companylogo from '../resources/logo.png';
import MenuList from '../MenuList/menulist';

const login = () => {
    return (
    <div className="logincss">
        {/* <div>
            <img src={companylogo} alt="Companylogo"></img>
        </div>     */}
        <MenuList/>
        <div>
            <button onClick={() => alert('Hello')}>Login</button>
        </div>
        
    </div>    
    )}

export default login;