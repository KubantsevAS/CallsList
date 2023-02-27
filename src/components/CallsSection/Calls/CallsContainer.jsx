import React, { useState, useEffect } from 'react';
import { getCallsData } from '../../../api/api';
import Calendar from './Calendar/Calendar';
import styles from './CallContainer.module.css'
import CallElem from './CallElem/CallElem';
import SearchAndFilters from './SearchAndFilters/SearchAndFilters';

const CallsContainer = () => {

    const [calls, setCalls] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await getCallsData();
            setCalls(request.data.results);
            setLoading(true);
        }
        fetchData();
    }, []);
    console.log(calls)

    return (
        <div className={styles.container}>
            <Calendar />
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

