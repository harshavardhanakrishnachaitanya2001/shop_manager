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
                    Number of products:
                    <input type='number'/>
                </label>
                <label>
                    Name of products
                    <input type='text'/>
                </label>
                <label>
                    Price of products
                    <input type='text'/>
                </label>
            </form>
        </>
    )
}

export default sellerSide