import React from 'react'
import styles from './CallElem.module.css'

export default function CallElem(props) {
    return (
        <div>
            <div className={styles.callElem}>
                <span>{props.in_out}</span>
                <span>
                    {props.date.split(' ')[1].split(':').slice(0, 2).join(':')}
                </span>
                <span>
                    <img src={props.person_avatar} alt='no data'></img>
                </span>
                <span>
                    <div>{props.partner_data.name}</div>
                    <div>{props.partner_data.phone}</div>
                </span>
                <span>{props.source}источник</span>
                <span>оценка</span>
                <span>{props.time}</span>
            </div>
        </div>
    )
}
