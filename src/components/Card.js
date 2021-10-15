import Photo from "../img/photo.jpg"

const Card = () => {
    return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Photo} alt="article" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-yellow-400">Banka, 1er invité de la CSM</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Publié le 04/01/2021</span>
        </div>
    </div>
    )
}

export default Card
