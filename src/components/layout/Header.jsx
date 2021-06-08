import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Buisiwe's TodoList Site</h1>
        </header>
    )
}
const headerStyle = {
    background: '#7e57c2',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px'
}


export default Header;