import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdSearch } from "react-icons/io";




const Locationbar = () => {
  const Locationlocater = [
    {
      city:'Direction Locater'
    }
  ]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='bg-white relative rounded-2xl mx-auto p-3 w-[55rem] mt-11 flex'>
        <div className='flex  '>
         <CiLocationOn  className='text-xl text-[#FF7E8B]'/>
          <div className='flex justify-between w-[15rem] ms-2 border-r-2 border-gray-300'>
            <span> Indore </span>
              <button className='pe-3 mt-1' onClick={()=> setIsOpen((prev)=> !prev)}> 
                {!isOpen ? (< IoMdArrowDropdown/>) : (<IoMdArrowDropup/>)}
              </button>
            {isOpen && (
              <div className='absolute top-[3.7rem] left-2 p-3 rounded-lg w-[17rem] bg-white'>
                {Locationlocater.map((v,i)=>(
                  <div>
                    <div className='flex'>
                      <h3 className='me-3 mt-1 text-[#EF4F5F]'><FaMapLocationDot /></h3>
                      <h3>{v.city}</h3>
                  </div>
                    <h3 className='ms-7 text-sm text-gray-500'>Using GPS</h3>
                  </div>
                  
                ))}
              </div>
            )}
          </div>
          
        </div>

        <div className='p-2 text-gray-400'>
            <span ><IoMdSearch className='font-bold'/></span>
        </div>
        <div>
          <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='mt-1 w-96 ms-3'/>
        </div>
      </div>
    </>
  )
}

export default Locationbar;
