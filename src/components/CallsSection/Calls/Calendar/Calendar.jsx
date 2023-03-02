import React, {useState} from 'react';
import styles from './Calendar.module.css'
import {CalendarSvg, ArrowLeftSvg, ArrowRightSvg, PlusBtnSvg} from './../../../../images/SvgCollectorForFilter'
import moment from 'moment/moment';

export default function Calendar (props) {

    const dateCal = ['3 дня', 'неделя', 'месяц', 'год']
    const [dateSelec, setDateSelec] =  useState('3 дня');

    // Функция для присваивания нового значение даты старта
    function showDateRange (dateSelec) {
        switch (dateSelec) {
            case '3 дня' :
                return props.setDefStart(moment().subtract(2, 'days').format('YYYY-MM-DD'));
            case 'неделя' :
                return props.setDefStart(moment().startOf('week').add(1, 'days').format('YYYY-MM-DD'));
            case 'месяц' :
                return props.setDefStart(moment().startOf('months').format('YYYY-MM-DD'));
            case 'год' :
                return props.setDefStart(moment().startOf('years').format('YYYY-MM-DD'));
            default: 
                break;
        }
    }

    function onDateIncrement () {
        if (dateSelec === 'год') {
            showDateRange (dateSelec);
            return
        } else {
            setDateSelec(dateCal[dateCal.indexOf(dateSelec) + 1]);
            showDateRange (dateSelec);      
        }
    }

    function onDateDecrement () {
        if (dateSelec === '3 дня') {
            showDateRange (dateSelec);
            return 
        } else {
            setDateSelec(dateCal[dateCal.indexOf(dateSelec) - 1]);
            showDateRange (dateSelec);
        }
    }

    return (
        <div className={styles.calendarContainer}>

            <span className={styles.balanceBtn}>
                <div>Баланс: <span>272 ₽</span></div>
                {PlusBtnSvg()}
            </span>

            <span className={styles.selector}>
                <div className={styles.arrow + ' ' + styles.left} onClick={onDateDecrement}>
                    {ArrowLeftSvg()}
                </div>
                <div className={styles.days}>
                    {CalendarSvg()}
                    <span>{dateSelec}</span>
                </div>
                <div className={styles.arrow + ' ' + styles.right} onClick={onDateIncrement}>
                    {ArrowRightSvg()}
                </div>
            </span>
            
        </div>
    )
}