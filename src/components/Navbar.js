import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BarItem = ({
    text,
    path,
}) => {
    const location = useLocation();
    const is_current_path = location.pathname.endsWith(path);
    return (
        <div style={{color: 'white', textAlign: 'center', lineHeight: '47px', fontSize: '18px', cursor: 'pointer', backgroundColor: is_current_path ? 'rgb(173,21,21)' : ''}}>
            <Link to={path} style={{padding: '0px 30px', color: 'inherit', textDecoration: 'inherit'}}>
              {text}
            </Link>
        </div>
    );
}

const Navbar = () => {
    return (
        <div style={{width: '100%', backgroundColor: 'rgb(77,30,4)', display: 'flex', justifyContent: 'center'}}>
            <BarItem text={'Inicio'} path={'/'}/>
            <BarItem text={'Productos'} path={'/products'}/>
            <BarItem text={'Ofertas'} path={'/'}/>
            <BarItem text={'Información'} path={'/'}/>
            <BarItem text={'Contáctanos'} path={'/'}/>
        </div>
    );
}

export default Navbar;