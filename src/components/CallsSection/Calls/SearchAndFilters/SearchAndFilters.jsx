import React from 'react';
import styles from './SearchAndFilters.module.css'
import {SearchSvg, ArrowDownSvg} from './../../../../images/SvgCollectorForFilter'

export default function SearchAndFilters() {
    return (
        <div className={styles.container}>

            <input type={'search'} className={styles.inputField} placeholder={'Поиск по звонкам'}/>

            <div className={styles.filters}>
                <span className={styles.filterOption}>
                    <span>Все типы</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
                <span className={styles.filterOption}>
                    <span>Все сотрудники</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
                <span className={styles.filterOption}>
                    <span>Все звонки</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
                <span className={styles.filterOption}>
                    <span>Все источники</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
                <span className={styles.filterOption}>
                    <span>Все оценки</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
                <span className={styles.filterOption}>
                    <span>Все ошибки</span>
                    <span className={styles.arrow}>{ArrowDownSvg()}</span>
                </span>
            </div>
            
        </div>
    )
}
