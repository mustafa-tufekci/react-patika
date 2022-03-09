import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./style.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123"
    },
    {
      fullname: "Ensar",
      phone_number: "5464352"
    },
    {
      fullname: "CHAD",
      phone_number: "1231231"
    }
  ]);
  
  useEffect(() => {
    console.log(contacts);
  }, [contacts])
 
  return (
    <div class="container">
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
