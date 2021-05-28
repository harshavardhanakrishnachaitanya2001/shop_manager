import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/sellerSide.module.css'

function sellerSide(){
    const [numberOfItems,setNumberOfItems]=useState();

    const handleNumberChange = (e) => {
        setNumberOfItems(e.target.value)
    }

    return(
        <>
            <Head>
                <title>Seller side</title>
            </Head>
            <h1 className={styles.mainHeading}>Seller side</h1>
            <div className={styles.itemDetails}>
                <form>
                    <label>
                        Number of items:
                        <input type='number' onChange={handleNumberChange} value={numberOfItems}/>
                    </label>
                </form>
            </div>
        </>
    )
}

export default sellerSide