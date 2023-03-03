import React, { useState, useRef } from 'react';
import styles from './Calendar.module.css'
import { CalendarSvg, ArrowLeftSvg, ArrowRightSvg, PlusBtnSvg } from './../../../../images/SvgCollectorForFilter'
import moment from 'moment/moment';

export default function Calendar(props) {

    const catMenu = useRef(null)

    const dateCal = ['3 дня', 'Неделя', 'Месяц', 'Год']
    const [dateSelec, setDateSelec] = useState('3 дня');
    const [menuActive, setMenuActive] = useState(false);

    const closeOpenMenus = (e)=>{
        if(catMenu.current && menuActive && !catMenu.current.contains(e.target)){
            setMenuActive(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)


    // Функция для присваивания нового значение даты старта
    function showDateRange(dateSelec) {
        switch (dateSelec) {
            case '3 дня':
                return props.setDefStart(moment().subtract(2, 'days').format('YYYY-MM-DD'));
            case 'Неделя':
                return props.setDefStart(moment().startOf('week').add(1, 'days').format('YYYY-MM-DD'));
            case 'Месяц':
                return props.setDefStart(moment().startOf('months').format('YYYY-MM-DD'));
            case 'Год':
                return props.setDefStart(moment().startOf('years').format('YYYY-MM-DD'));
            default:
                break;
        }
    }

    function onDateIncrement() {
        if (dateSelec === 'Год') {
            showDateRange(dateSelec);
            return
        } else {
            setDateSelec(dateCal[dateCal.indexOf(dateSelec) + 1]);
            showDateRange(dateSelec);
        }
    }

    function onDateDecrement() {
        if (dateSelec === '3 дня') {
            showDateRange(dateSelec);
            return
        } else {
            setDateSelec(dateCal[dateCal.indexOf(dateSelec) - 1]);
            showDateRange(dateSelec);
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
                <div className={styles.days} 
                    onClick={() => menuActive ? setMenuActive(false) : setMenuActive(true)}
                    onBlur={() => setMenuActive(false)}
                    onFocus={() => setMenuActive(false)}
                >
                    {CalendarSvg()}
                    <span>{dateSelec}</span>
                </div>
                <div className={styles.arrow + ' ' + styles.right} onClick={onDateIncrement}>
                    {ArrowRightSvg()}
                </div>

                {menuActive &&
                    <div className={styles.dateMenu} ref={catMenu}>
                        <div className={styles.menuItem + ' ' + (dateSelec === '3 дня' ? styles.menuActive : null)}>
                            <div>3 дня</div>
                        </div>
                        <div className={styles.menuItem}>
                            <div>Неделя</div>
                        </div>
                        <div className={styles.menuItem}>
                            <div>Месяц</div>
                        </div>
                        <div className={styles.menuItem}>
                            <div>Год</div>
                        </div>
                        <div className={styles.menuItem}>
                            <div>Указать дату</div>
                        </div>
                    </div>
                }
            </span>



        </div>
    )
}