import React from 'react';
import { Link } from 'react-router-dom';
import { MdAppShortcut } from "react-icons/md";
import zomatoimg from "../images/zomato.png";
import Locationbar from './Locationbar';
import Threecolsection from './Threecolsection';
import { IoIosPlay, IoIosArrowForward } from "react-icons/io";
import ColimgSection from './ColimgSection';
import PopularLocation from './PopularLocation';
import Getthezomatoapp from './Getthezomatoapp';
import ZomatoAccordion from './ZomatoAccordion';
import Footer from './Footer';




const Investorrelation = () => {
  return (
    <>
      <div className=''>
        <div className='w-full bg-hero brightness-100 bg-fixed h-[30rem] bg-no-repeat bg-cover'>{/* bg-[url("./assets/images/Banner.jpg")] */}
          <header className='max-w-[70rem]  mx-auto'>
            <nav className='flex justify-between'>
              <div className=' p-2 mt-6 flex cursor-pointer text-white font-bold'>
                <MdAppShortcut className='me-1 mt-1' />
                <a href="" className='mt-0'>Get the app</a>
              </div>
              <div className='text-white mt-6  font-bold'>
                <ul className='flex mt-1 '>
                  <li className='cursor-pointer me-20 hover:border-solid hover:border-b-2 hover:border-white'>
                    <Link to={"/"} >Investor Relations </Link>
                  </li>
                  <li className='cursor-pointer hover:border-solid hover:border-b-2 hover:border-white'>
                    <Link to={"/restaurant"} > Add Restaurant </Link>
                  </li>
                  <li className='cursor-pointer mx-20 hover:border-solid hover:border-b-2 hover:border-white'>
                    <Link to={"/Login"}> Log In</Link>
                  </li>
                  <li className='cursor-pointer hover:border-solid hover:border-b-2 hover:border-white'>
                    <Link to={"/Signup"}> Sign Up</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className='text-white text-5xl '>
              <img src={zomatoimg} alt="" className='mx-auto w-80 mt-16 mb-7' />
              <h2 className='flex justify-center'> Discover the best food & drinks in Indore </h2>
            </div>
            <Locationbar />
          </header>
        </div>

        <section>
          <Threecolsection />
        </section>

        {/* collection Section */}
        <div className='my-32 p-4 border border-gray-200 shadow-sm rounded-sm max-w-[70rem] mx-auto'>
          <div>
            <h2 className='text-4xl mb-4 font-semibold'> Collections </h2>
          </div>
          <div className='flex justify-between'>
            <div >
              <p className='text-lg mb-4'>Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</p>
            </div>
            <div className='flex text-lg text-rose-400 mb-7'>
              <span > All collections in indore </span>
              <span className='mt-2 ms-2'> <IoIosPlay /> </span>
            </div>
          </div>
          <div className=''>
            <div className='flex gap-7  '>

              <ColimgSection />

            </div>
          </div>
        </div>
        {/* End Collection Section */}

        <section>
          <PopularLocation/>
        </section>

        {/* Get the Zomato app */}
        <section>
          <div className=' border-2  bg-[#FFFBF7]'>
           <Getthezomatoapp />
          </div>
        </section>

        <section>
          <ZomatoAccordion/>
        </section>

        <section>
          <Footer />
        </section>

      </div>{/* End Main Div */}
    </>
  )
}

export default Investorrelation;
