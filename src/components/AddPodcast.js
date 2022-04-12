import { useHistory } from "react-router";
import axios from "axios";
import { useState } from "react";

const AddPodcast = () => {

  const history = useHistory()
  const [addPodacastInput, setAddPodacastInput] = useState({
    title: '',
    content: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setAddPodacastInput({...addPodacastInput, [e.target.name]: e.target.value})
  };

  const articleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: addPodacastInput.title,
      content: addPodacastInput.content,
    }

    axios.post('/api/podcast', data).then(res => {
        if(res.data.status === 200)
        {
          history.push('/')
        }
        else if(res.data.status === 500)
        {
          setAddPodacastInput({...addPodacastInput, error_list: res.data.validation_errors})
        }
      })
    }
    

    return (
      <div className="w-full">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full justify-around" onSubmit={articleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Titre
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={addPodacastInput.title} name="title" type="input" placeholder="Titre du podcast" required/>
          <span>{addPodacastInput.error_list.title}</span>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lien
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={addPodacastInput.content} name="content" type="input" placeholder="Lien du podcast" required/>
          <span>{addPodacastInput.error_list.content || addPodacastInput.error_list}</span>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
    )
}

export default AddPodcast
