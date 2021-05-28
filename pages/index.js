import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Store Manager</title>
      </Head>
      <body className={styles.body}>
        <h1 className={styles.title}>Store Manager</h1>  
      </body>
    </div>
  )
}
