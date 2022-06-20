import React, { useState, useEffect } from 'react';

function Contact() {
  const [value, setValue] = useState("Save");
  const [name, setName] = useState("Before");


  function handleSubmit (e) {
    e.preventDefault();
    setName(value);

  }

  useEffect(() => {
    console.log("before", value);
    setValue("Save");
    console.log("after", value);
  }, [name]);

  return (
    <form onSubmit ={handleSubmit}>
      <input type="text" placeholder={value} onChange={(e) => setValue(e.target.value)} />
      <button>{name}</button>
    </form>
  )
}

export default Contact;