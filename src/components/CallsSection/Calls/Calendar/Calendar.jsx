import React from 'react';
import styles from './Calendar.module.css'
import {CalendarSvg, ArrowLeftSvg, ArrowRightSvg, PlusBtnSvg} from './../../../../images/SvgCollectorForFilter'


export default function Calendar () {
    return (
        <div className={styles.calendarContainer}>

            <span className={styles.balanceBtn}>
                <div>Баланс: <span>272 ₽</span></div>
                {PlusBtnSvg()}
            </span>

            <span className={styles.selector}>
                <div className={styles.arrow + ' ' + styles.left}>
                    {ArrowLeftSvg()}
                </div>
                <div className={styles.days}>
                    {CalendarSvg()}
                    <span>3 дня</span>
                </div>
                <div className={styles.arrow + ' ' + styles.right}>
                    {ArrowRightSvg()}
                </div>
            </span>
            
        </div>
    )
}