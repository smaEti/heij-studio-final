"use client";
import { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <div>your name :</div>
      <input type="text" />
      <div>email</div>
      <input type="text" />

      <div>subject</div>
      <input type="text" />

      <div>your msg</div>
      <input type="text" />
    </>
  );
}
//shadcn