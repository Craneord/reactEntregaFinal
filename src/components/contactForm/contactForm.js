import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const defaultForm = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(defaultForm);
  const [id, setId] = useState();

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then((snapshot) => {
      setId(snapshot.id);
    });
  };

  const resetHandler = () => {
    setForm(defaultForm);
    setId('');
  };
    
    return (
        <div>
            {id ? (<div>Compra realizada con exito, n° operacion {id}
                <button onClick={resetHandler}>Editar info</button>
                <Link to="/">Volver al inicio</Link>
            </div>
            
            ) :(
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
                <label htmlFor="Email">Email</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                   value={form.email}
                    onChange={changeHandler}
                />
            </div>
            <div>
                <label htmlFor="adress">Direccion</label>
                <input 
                    name="adress"
                    id="adress"
                    value={form.adress}
                    onChange={changeHandler}
                />
            </div>
            
            <><button>Enviar</button></>
        </form>
        
    )}
        </div>
        
    )
}
export default ContactForm;