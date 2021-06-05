import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name,setName]=useState('');
  const [phoneNumber,setPhoneNumber]=useState();
  const [customerAddress,setCustomerAddress]=useState('');
  const [item,setItem]=useState('');
  const [quantity,setQuantity]=useState();
  const [customerDetails,setCustomerDetails]=useState([]);
  const [registerStatus,setRegisterStatus]=useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleAddressChange = (e) => {
    setCustomerAddress(e.target.value)
  }

  function handleCustomerInfoSubmission(e){
    e.preventDefault();
    setCustomerDetails([{
      "name": name,
      "phoneNumber": phoneNumber,
      "address": customerAddress
    }]);
    setRegisterStatus(true)
  }

  const customerInfo = customerDetails.map((d)=>{return (
    <ul key={d.name} style={{listStyle:'none', fontSize:'25px'}}>
      <li>{"Registered name: " + d.name}</li>
      <li>{"Registered phone number: " + d.phoneNumber}</li>
      <li>{"Registered Address: " + d.address}</li>
    </ul>
  )})

  return (
    <div>
      <Head>
        <title>Store Manager</title>
      </Head>
      <body className={styles.body}>
        <h1 className={styles.title}>AKC online store</h1>
        <form className={styles.form} onSubmit={handleCustomerInfoSubmission}>
          <label>
            Name:
            <input type='text' onChange={handleNameChange} value={name}/>
          </label>
          <label>
            Phone No:
            <input type='text' value={phoneNumber} onChange={handlePhoneNumberChange}/>
          </label>
          <label>
            Address:
            <textarea onChange={handleAddressChange} value={customerAddress}/>
          </label>
          <button type='submit'>Register</button>
        </form>
        {registerStatus?<h1>{name + ', congrats. You are registered'}</h1> : <h1>Please register to shop in AKC store</h1>}
      </body>
    </div>
  )
}
