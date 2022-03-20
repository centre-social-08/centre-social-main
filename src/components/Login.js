import { useHistory } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = ({setHasToken}) => {

  const history = useHistory()
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({...loginInput, [e.target.name]: e.target.value})
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
    axios.post('/api/login', data).then(res => {
        if(res.data.status === 200)
        {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          history.push('/')
          setHasToken(true)
        }
        else if(res.data.status === 401)
        {
          setLoginInput({...loginInput, error_list: res.data.message})
        }
        else
        {
          setLoginInput({...loginInput, error_list: res.data.validation_errors})
        }
      })
    })
  }
    

    return (
      <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginSubmit}>
        <div className="mb-4">
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Adresse Mail
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={loginInput.email} name="email" type="email" placeholder="xxx@xxx.xxx"/>
          <span>{loginInput.error_list.email}</span>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={loginInput.password} name="password" type="password" placeholder="******************"/>
          <span>{loginInput.error_list.password || loginInput.error_list}</span>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Connexion
          </button>
        </div>
      </form>
    </div>
    )
}

export default Login
