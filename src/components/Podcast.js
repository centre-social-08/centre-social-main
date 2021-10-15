import { useState } from "react";
import Spinner from "react-spinkit";

const Podcast = () => {

    const [loading, setLoading] = useState(true);

    const iframeLoading = () => {
      setLoading(false)
    }

    return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 pb-4">
        <div className="font-bold text-xl mb-2 text-yellow-400 self-auto">
          Chronique Magdo, série "Zoo"
        </div>
        { loading ? 
          <div className="flex justify-center"> 
              <Spinner name="ball-beat" />
          </div>
        : ''}
            <iframe onLoad={() => iframeLoading()} title="Chronique Magdo Zoo" width="100%" src="https://audioblog.arteradio.com/embed/158923" style={{margin: 0, padding: 0, border: 'none',}}></iframe>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Publié le 04/01/2021</span>
        </div>
    </div>
    )
}

export default Podcast
