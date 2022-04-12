import {useState} from 'react';
import Spinner from "react-spinkit";
import axios from 'axios';

const Podcast = ({id, title, content, date, hasToken}) => {

    const [loading, setLoading] = useState(true);

    const handleDelete = (id) => {
      axios.delete(`/api/podcast/`+id).then(res => {
        if(res.data.status === 200)
        {
          window.location.reload()
        }
    })}
    
    const iframeLoading = () => {
      setLoading(false)
    }

    return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 pb-4">
      {hasToken ? <button onClick={ () => handleDelete(id)} className="text-red-400">X</button> : '' }
        <div className="font-bold text-xl mb-2 text-yellow-400 self-auto">
          {title}
        </div>
        { loading ? 
          <div className="flex justify-center"> 
              <Spinner name="ball-beat" />
          </div>
        : ''}
            <iframe onLoad={() => iframeLoading()} 
            title="Chronique Magdo Zoo" width="100%" src={content} 
            style={{margin: 0, padding: 0, border: 'none',}}></iframe>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Publié le {date}</span>
        </div>
    </div>
    )    
}

export default Podcast
