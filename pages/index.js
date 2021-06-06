import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name,setName]=useState('');
  const [phoneNumber,setPhoneNumber]=useState();
  const [customerAddress,setCustomerAddress]=useState('');
  const [customerDetails,setCustomerDetails]=useState([]);
  const [registerStatus,setRegisterStatus]=useState(false);
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleAddressChange = (e) => {
    setCustomerAddress(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const varifyPassword=password==confirmPassword

  function handleCustomerInfoSubmission(e){
    e.preventDefault();
    setCustomerDetails([{
      "name": name,
      "phoneNumber": phoneNumber,
      "address": customerAddress,
      "password": confirmPassword
    }]);
    if(varifyPassword){
      setRegisterStatus(true)
    }else{
      setRegisterStatus(false)
    }
  }

  // const customerInfo = customerDetails.map((d)=>{return (
  //   <ul key={d.name} style={{listStyle:'none', fontSize:'25px'}}>
  //     <li>{"Registered name: " + d.name}</li>
  //     <li>{"Registered phone number: " + d.phoneNumber}</li>
  //     <li>{"Registered Address: " + d.address}</li>
  //   </ul>
  // )})

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
            <input type='text' onChange={handleNameChange} value={name} required/>
          </label>
          <label>
            Phone No:
            <input type='text' value={phoneNumber} onChange={handlePhoneNumberChange} required/>
          </label>
          <label>
            Address:
            <textarea onChange={handleAddressChange} value={customerAddress}/>
          </label>
          <label>
            Set password:
            <input type='password' value={password} onChange={handlePasswordChange} required/>
          </label>
          <label>
            Confirm password:
            <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
          </label>
          <button type='submit'>Register</button>
        </form>
        {!varifyPassword?<h4>Passwords do not match. Check if the passwords you entered are the same</h4>:''}
        {registerStatus?<h1>{'Congrats ' + name + '! You are a customer of AKC store!!'}</h1> : <h1>Register to AKC store to shop for awsome products</h1>}
      </body>
    </div>
  )
}
