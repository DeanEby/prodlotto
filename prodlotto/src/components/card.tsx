import { updateElement } from "../App"

const Card = ({id}:{
    id: number,
}) => {
  return ( 
  <div className="grid grid-cols-5 grid-rows-5 border border-purple-400 w-[140px] h-[160px] sm:w-[250px] sm:h-[300px] mx-auto p-2">
    <div className="col-span-5">
      <button className="cursor-pointer bg-transparent text-xs sm:text-sm md:text-base hover:bg-gray-400 text-gray-100 hover:text-purple-800 text-grey-100 font-semibold py-1 px-2 border border-purple-400 hover:border-transparent rounded"
          onClick={() => updateElement(id)}>regenerate</button>
    </div>
    <h1 id={String(id)} className="transition-opacity duration-200 text-center col-span-5 row-span-4 flex items-center justify-center text-sm sm:text-lg md:text-xl lg:text-2xl"></h1>
  </div>
  )
}

export default Card