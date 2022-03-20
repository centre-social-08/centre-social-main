import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const Register = () => {

    const history = useHistory()
    const [registerInput, setRegisterInput] = useState({
      name: '',
      email: '',
      password: '',
      error_list: [],
    });

    const handleInput = (e) => {
      e.persist();
      setRegisterInput({...registerInput, [e.target.name]: e.target.value})
    };

    const registerSubmit = (e) => {
      e.preventDefault();

      const data = {
        name: registerInput.name,
        email: registerInput.email,
        password: registerInput.password,
      }

      axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/register', data).then(res => {
          if(res.data.status === 200)
          {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.name);
            history.push('/')
          }
          else
          {
              setRegisterInput({...registerInput ,error_list: res.data.validation_errors})
          }
        })
      })
    }

    return (
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registerSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={registerInput.name} name="name" placeholder="Username"/>
      <span>{registerInput.error_list.name}</span>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Adresse Mail
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={registerInput.email} name="email" placeholder="xxx@xxx.xxx"/>
      <span>{registerInput.error_list.email}</span>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={registerInput.password} name="password" placeholder="******************"/>
      <span>{registerInput.error_list.password}</span>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Inscription
      </button>
    </div>
  </form>
</div>
    )
}

export default Register
