import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';


const ContactFormEdit = ({ id }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const contactFormRef = doc(db, 'contactform', id);
    getDoc(contactFormRef).then((snapshot) => {
      if (snapshot.exists()) {
        setForm(snapshot.data());
      }
    });
  }, [id]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const contactFormRef = doc(db, 'contactform', id);
    updateDoc(contactFormRef, form);
  };

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          id="name"
          value={form.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={changeHandler}
        ></textarea>
      </div>
      <button>Editar</button>
    </form>
  );
};

export default ContactFormEdit;
