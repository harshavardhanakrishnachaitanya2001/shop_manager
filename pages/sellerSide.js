import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/sellerSide.module.css'

function sellerSide(){

    const handleNumberChange = (e) => {
        setNumberOfItems(e.target.value)
    }

    return(
        <>
            <Head>
                <title>Seller side</title>
            </Head>
            <h1 className={styles.mainHeading}>Seller side</h1>
            <form className={styles.form}>
                <label>
                    Number of items:
                    <input type='text'/>
                </label>
                <label>
                    Names of items: 
                    <input type='text'/>
                </label>
                <label>
                    
                </label>
            </form>
        </>
    )
}

export default sellerSide