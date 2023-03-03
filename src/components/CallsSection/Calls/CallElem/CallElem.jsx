import React from 'react'
import { IncomingSvg, OutgoingSvg } from '../../../../images/SvgCollectorCallElem'
import styles from './CallElem.module.css'
import defAva from './../../../../images/defAva.png'

export default function CallElem(props) {

    let phone = props.partner_data.phone;

    let time = `${Math.floor(props.time / 60)}:${props.time % 60 < 10 ? '0' + props.time % 60 : props.time % 60}`
    return (
        <div>
            <div className={styles.callElem}>
                <span className={!props.time && styles.incomeSvg}>{props.in_out ? IncomingSvg() : OutgoingSvg()}</span>
                <span className={styles.callTime}>
                    {props.date.split(' ')[1].split(':').slice(0, 2).join(':')}
                </span>
                <span className={styles.avatar}>
                    <img src={props.person_avatar || defAva} alt='no data'></img>
                </span>
                <span className={styles.partnerInfo}>
                    <div>{props.partner_data.name}</div>
                    <div>{`+${phone[0]} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9, 11)}`}</div>
                </span>
                <span className={styles.source}>{props.source}</span>
                <span className={styles.mark}>оценка</span>
                <span className={styles.record}>{props.time ? time : null}</span>
            </div>
        </div>
    )
}
