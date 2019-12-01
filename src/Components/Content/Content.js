import React from 'react'
import Characteristic from '../Characteristic/Characteristic'
import Subscription from '../Subscription/Subscription'
import Photographers from '../Photographers/Photographers'
import classes from './Content.module.scss'


const content = (props) => {
    return (
        <div className={classes.Content}>
            <Photographers photographers={props.photographers}></Photographers>
            <Subscription></Subscription>
            <Characteristic></Characteristic>
        </div>
    )
}

export default content
