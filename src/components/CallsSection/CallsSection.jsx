import React from 'react'
import CallsContainer from './Calls/CallsContainer'
import Header from './Header/Header'
import styles from './CallsSection.module.css'

export default function CallsSection() {
    return (
        <div className={styles.section}>
            <Header/>
            <CallsContainer/>
        </div>
    )
}
