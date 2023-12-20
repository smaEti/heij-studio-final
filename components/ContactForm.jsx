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
  const [error, setError] = useState(null);
  return (
    <>
      {error && (
        <div className="p-2 rounded-lg bg-red-500 text-background">{error}</div>
      )}
      <label>Your name *: </label>
      <Input
        type="text"
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
        value={data.name}
      />
      <label>Email *: </label>
      <Input
        type="text"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
        value={data.email}
      />
      <label>Subject *: </label>
      <Input
        type="text"
        onChange={(e) => {
          setData({ ...data, subject: e.target.value });
        }}
        value={data.subject}
      />
      <label>Your message *:</label>
      <Input
        type="text"
        onChange={(e) => {
          setData({ ...data, message: e.target.value });
        }}
        value={data.message}
      />
      <button
        className="bg-secondry text-background p-2 rounded-lg hover:bg-orange-500"
        onClick={() => {
          sendData({ data, setError });
        }}
      >
        Submit
      </button>
    </>
  );
}

async function sendData({ data, setError }) {
  const response = await fetch(`/api/contactrequest/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const backeddata = await response.json();
  setError(backeddata.message);
  return backeddata;
}
