import { useForm } from "react-hook-form";
import { useState } from "react";
import ContactPic from "../img/radio.jpg"

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
  
    return (
        <div className="flex justify-around items-center">
        <div className="w-1/4 overflow-hidden">
          <img src={ContactPic} alt="contact pic"/></div>
      <form className="flex flex-col justify-around" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} placeholder="First name" />
        {errors.firstName && <span>Ce champ est obligatoire</span>}
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
  
        <p>{result}</p>
        <input type="submit" />
      </form>
      </div>
    );
  }
  
  

export default Contact
