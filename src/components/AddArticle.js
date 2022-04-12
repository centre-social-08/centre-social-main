import { useHistory } from "react-router";
import axios from "axios";
import { useState } from "react";

const AddArticle = () => {

  const history = useHistory()
  const [addArticleInput, setAddArticleInput] = useState({
    title: '',
    content: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setAddArticleInput({...addArticleInput, [e.target.name]: e.target.value})
  };

  const articleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: addArticleInput.title,
      content: addArticleInput.content,
    }

    axios.post('/api/article', data).then(res => {
        if(res.data.status === 200)
        {
          window.location.reload()
        }
        else if(res.data.status === 500)
        {
          setAddArticleInput({...addArticleInput, error_list: res.data.validation_errors})
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
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={addArticleInput.title} name="title" type="input" placeholder="Titre de l'article" required/>
          <span>{addArticleInput.error_list.title}</span>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contenu
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} value={addArticleInput.content} name="content" type="input" placeholder="Contenu de l'article" rows="5" required/>
          <span>{addArticleInput.error_list.content || addArticleInput.error_list}</span>
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

export default AddArticle
