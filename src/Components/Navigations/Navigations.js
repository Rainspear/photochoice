import React from 'react'
import classes from './Navigations.module.scss'

const navigations = (props) => {
    return (
            <ul className={classes.Navigations}>
                <li>Trang chủ</li>
                <li>Giới thiệu</li>
                <li>Đặt lịch</li>
                <li>Liên hệ</li>
            </ul>
    )
}

export default navigations
