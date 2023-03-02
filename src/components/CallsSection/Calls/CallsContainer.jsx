import React, { useState, useEffect } from 'react';
import { getCallsData } from '../../../api/api';
import Calendar from './Calendar/Calendar';
import styles from './CallContainer.module.css'
import CallElem from './CallElem/CallElem';
import SearchAndFilters from './SearchAndFilters/SearchAndFilters';
import moment from 'moment';

const CallsContainer = () => {

    const [defStart, setDefStart] = useState(moment().subtract(2, 'days').format("YYYY-MM-DD"));
    const [defEnd, setDefEnd] = useState(moment().format("YYYY-MM-DD"));
    let in_out;

    const [calls, setCalls] = useState();
    const [loading, setLoading] = useState(false);


    // Получаем данные
    
    useEffect(() => {
        async function fetchData() {
            const request = await getCallsData(defStart, defEnd, in_out);
            setCalls(request.data.results);
            setLoading(true);
        }
        fetchData();
    }, [defStart, defEnd, in_out]);
    
    console.log(calls)
    console.log(defStart)

    return (
        <div className={styles.container}>
            <Calendar setDefEnd={setDefEnd} setDefStart={setDefStart} defStart={defStart} setCalls={setCalls}/>
            <SearchAndFilters/>
            <div className={styles.elementsField}>
                <div></div>
                {loading &&
                    calls.map(cal => <CallElem {...cal} key={cal.id} />)}
            </div>
        </div>
    );
}


export default CallsContainer;

