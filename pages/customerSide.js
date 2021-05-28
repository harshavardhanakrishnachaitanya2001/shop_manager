import React from 'react'
import styles from '../styles/customerSide.module.css'
import Head from 'next/head'
function customerSide(){
    return (
        <>
            <Head>
                <title>customer side</title>
            </Head>
            <h1 className={styles.mainHeading}>Customer side</h1>
        </>
    )
}

export default customerSide