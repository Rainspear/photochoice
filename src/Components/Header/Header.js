import React from 'react';
import Classes from './Header.module.scss';
import Navigations from '../Navigations/Navigations';
import Logo from '../Logo/Logo';


const header = () => {
    return (
        <div className={Classes.Header}>
            <Logo></Logo>
            <Navigations></Navigations>
            <form className={Classes.Search}>
                <input type="text" placeholder="Tìm thợ ảnh"/>
            </form>
            <ul className={Classes.UserSection}>
                <li>Đăng nhập</li>
                <li>Đăng ký</li>
            </ul>
        </div>
    )
}

export default header;
