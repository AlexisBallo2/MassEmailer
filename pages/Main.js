import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import styles from "../styles/Main.module.css"

export default function Main() {

  const [myEmail, setMyEmail] = useState("")
  const [emails, setEmails] = useState("")
  const [appCode, setAppCode] = useState("")
  const [subject, setSubject] = useState("")
  const[body, setBody] = useState("")

  
  const sendEmail = async () => {
    console.log("data:", myEmail, emails, appCode, subject,body)
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        myEmail: myEmail,
        emails: emails,
        appCode: appCode,
        subject: subject,
        body: body
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleEmailChange = event => {
    setMyEmail(event.target.value);
  };
  const handleAppCodeChange = event => {
    setAppCode(event.target.value);
  };
  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };
  const handleEmailsChange = event => {
    setEmails(event.target.value);
  };
  const handleBodyChange = event => {
    setBody(event.target.value);
  };

  return (
    <div className = {styles.holder}>
      <h1> Send Mass Email</h1>
      <h3>Your email</h3>
       <input
        onChange={handleEmailChange}
        value={myEmail}
      />
      <h3> <a href = "https://support.google.com/accounts/answer/185833?hl=en" target = "_blank" style = {{color: "blue"}}> App Code </a> </h3>
      <input
        onChange={handleAppCodeChange}
        value={appCode}
      />
      <h3> List of addresses</h3>
    <input
        onChange={handleEmailsChange}
        value={emails}
      />
      <h3> Subject Line</h3>
    <input
        onChange={handleSubjectChange}
        value={subject}
      />
    <h3>Email Content</h3>
    <textarea
      type = "text"
        onChange={handleBodyChange}
        value={body}
        cols="30" rows="10"></textarea>
  <br/>
      <button onClick = {() => sendEmail()}>Send Emails</button>

    </div>
  )
}
