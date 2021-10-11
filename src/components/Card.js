import Photo from "../img/photo.jpg"

const Card = () => {
    return (
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={Photo} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Banka, 1er invité de la CSM</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Publié le 04/01/2021</span>
        </div>
    </div>
    )
}

export default Card
