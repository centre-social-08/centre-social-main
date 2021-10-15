import { useEffect, useState } from 'react';
import LogoHome from '../img/logo-csm.png'

const Live = () => {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://player.radioking.io/scripts/iframe.bundle.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

      useEffect(() => {
        async function getTracks() {
          let fetchTracks = await fetch('https://api.radioking.io/widget/radio/csm-webradio/track/next?limit=5')
          let res = await fetchTracks.json()
          setTracks(res)
        }
    
        getTracks()
       
      }, [tracks]);
      
    return (
            <div className="my-10">
            <div className="flex justify-center">
            <img src={LogoHome} alt="Home Logo" width="450" height="450"/>
            </div>
            <p className="text-4xl text-center">LE DIRECT</p>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 w-full justify-center">
                <iframe title="WebRadio" src="https://player.radioking.io/csm-webradio/?c=%232F3542&c2=%23FFA502&f=v&i=0&p=1&s=0&li=0&popup=1&plc=0&h=365&l=undefined&v=2" style={{ borderRadius: "5px", width: "275px", height: "365px", }} frameBorder="0" className="mx-auto"></iframe>
                <div>
                    {tracks.map((tracks) => (
                      <div key={tracks.title} className="border border-b-2 p-2">
                        <div className="flex justify-between">
                    <p>{tracks.title}</p>
                    <p>{new Date(tracks.started_at).toUTCString().substring(17,22)}</p>
                        </div>
                    <p>{tracks.artist}</p>
                      </div>
                    ))}
                </div>
                </div>
        </div>
    )
}

export default Live
