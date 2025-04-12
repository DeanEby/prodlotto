import { updateElement } from "./App"

const Card = ({id}:{
    id: number
}
) => {

  return ( 
  <div className="grid-cols-5 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl grid-rows-5 border border-purple-400 w-[250px] h-[300px] w-full md:w-1/2 flex-1 mx-auto max-w-md">
    <button className= "cursor-pointer bg-transparent text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:bg-gray-400 text-gray-100 hover:text-purple-800 text-grey-100 font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded scale-50"
        onClick={() => updateElement(id)}>regenerate</button>
    <h1 id={String(id)}></h1>
  </div>
  
  )
  }

export default Card