import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
import axios from 'axios';

const Contact = () => {
    
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
    const onSubmit = (data) => axios.post('/api/sendmail', data).catch(error => console.log(error.response))
  
    return (
      <div className="flex justify-center items-center h-screen w-full bg-black">
        <div className="bg-contact bg-cover bg-center h-screen w-1/3 hidden lg:flex"></div>
        <div className="lg:w-1/3 w-full">
        <form className="flex flex-col justify-around h-screen text-xl bg-white px-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-4xl">Contactez Nous</p>
          <p className="text-center text-sm">* Champs requis</p>
          <div>
          <label>Nom*</label>
          <div className="flex flex-col">
        <input {...register("name", { required: true })} placeholder="Nom" className="bg-gray-300"/>
        {errors.name?.type === 'required' && "Ce champ est requis"}
        </div>
        </div>
        <div>
          <label>Prénom*</label>
          <div className="flex flex-col">
        <input {...register("firstName", { required: true })} placeholder="Prénom" className="bg-gray-300"/>
        {errors.firstName?.type === 'required' && "Ce champ est requis"}
        </div>
        </div>
        <div>
          <label>Adresse e-mail*</label>
          <div className="flex flex-col">
        <input {...register("email", { required: true, pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }})} placeholder="Adresse e-mail" className="bg-gray-300"/>
        {errors.email?.type === 'required' && "Ce champ est requis"}
        {errors.email?.type === 'pattern' && "Entrez une adresse mail valide"}
        </div>
        </div>
        <div>
          <label>Message*</label>
          <div className="flex flex-col">
        <textarea {...register("message", { required: true, minLength: 10 })} placeholder="Votre message" className="bg-gray-300"/>
        {errors.message?.type === 'required' && "Ce champ est requis"}
        {errors.message?.type === 'minLength' && "Ce champ requiert au moins 10 caractères"}
        </div>
        </div>
        <input type="submit" className="h-10 bg-red-500"/>
        
        {isSubmitSuccessful && (
        <p className="text-green-400">Message Envoyé</p>
        )}
        </form>
        </div>
      </div>
    );
  }
  
  

export default Contact
