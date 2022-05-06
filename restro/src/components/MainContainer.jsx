import React from 'react'
import Delivery from "../img/delivery.png"
const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
  <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
    <div className="flex items-center gap-2 justify-center px-4 py-1 bg-orange-100 rounded-full">
      <p className="text-base text-orange-500 font-semibold">
          Bike Delivery
      </p>
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden  drop-shadow-x1">
             <img
             src={Delivery}
             className="w-full h-full object-contain"
             alt="delivery"
          />
       </div>
    </div>
    {/* Text */}
    <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

  {/* Dummy text */}
  <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>
  {/* Button->Order Now */}
  <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
  </button>

 </div>
  <div className="py-2 bg-blue-400 flex-1"></div>
</div>
  )
}

export default MainContainer