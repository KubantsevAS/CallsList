import React, { useState } from 'react';
import { getCallsData } from '../../../api/api';
import styles from './CallContainer.module.css'

const CallsContainer = () => {

    console.log(getCallsData())
    
    return (
        <div className={styles.container}>
            1
        </div>
    );
}


export default CallsContainer;