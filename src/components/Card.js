import Photo from "../img/photo.jpg"


const Card = ({title, content, date}) => {

    return (
      <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Photo} alt="article" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-yellow-400">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Publié le {date}</span>
        </div>
    </div>
        )
}

export default Card
