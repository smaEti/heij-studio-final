"use client";
import { useState } from "react";
import { Input } from "./ui/input";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <label>Your name *: </label>
      <Input type="text"  onChange={(e) => {
        setData({...data , name : e.target.value})
      }}/>
      <label>Email *: </label>
      <Input type="text" onChange={(e) => {
        setData({...data , email : e.target.value})
      }}/>
      <label>Subject *: </label>
      <Input type="text" onChange={(e) => {
        setData({...data , subject : e.target.value})
      }}/>
      <label>Your message *:</label>
      <Input type="text" onChange={(e) => {
        setData({...data , message : e.target.value})
      }}/>
      <button className="bg-secondry text-background p-2 rounded-lg hover:bg-orange-500" onClick={sendData({data})}>Submit</button>
    </>
  );
}


async function sendData({props}){
  return;
}
