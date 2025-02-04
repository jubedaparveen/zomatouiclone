import React from 'react';
import AppleApp from '../images/apple.jpg';
import GoogleApp from '../images/googleapp.jpg';
import MobileApp from '../images/mobile.png';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Getthezomatoapp = () => {
    return (
        <>
            <div className='max-w-[70rem] mx-auto p-3 my-16  shadow-lg'>
                <div className='flex flex-row gap-12'>
                    <div className='text-center p-2 basis-1/2'>
                        <img src={MobileApp} alt="" className='' />
                    </div>
                    <div className='p-2 basis-1/2 border'>
                        <h2 className='my- text-4xl'>Get the Zomato app</h2>
                        <p className='my-8 text-lg text-justify'>We will send you a link, open it on your phone to download the app</p>
                        <div>
                            <div className='my-4'>
                                <ul class="items-center w-full text-sm font-medium sm:flex ">
                                    <li class="">
                                        <div class="flex items-center">
                                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 " />
                                            <label for="horizontal-list-radio-license" class="py-3 ms-3 text-sm font-medium">Email </label>
                                        </div>
                                    </li>
                                    <li class=" ">
                                        <div class="flex items-center">
                                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="ms-6 w-4 h-4 " />
                                            <label for="horizontal-list-radio-id" class=" py-3 ms-3 text-sm font-medium">Phone</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className=' '>
                                <div className='my-5'>
                                    <div className=''>
                                        <button className='p-2 border mb-1'>
                                            India (+91)  <IoMdArrowDropdown className='inline' />
                                        </button>
                                        <div className=''>
                                            <ul className=''>
                                                <li>United States (+1)</li>
                                                <li>United Kingdom (+44)</li>
                                                <li>Australia (+61)</li>
                                                <li> Germany (+49)</li>
                                                <li> France (+33)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <input className='border py-2 w-60 px-3' type="text" placeholder='Email' />
                                    <button className='ms-3 text-white p-2 rounded-lg shadow-lg bg-[#E03546]'> Share App Link</button>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <p className='text-slate-300'>Download app from</p>
                        <div className='flex justify-center gap-4 my-12'>
                            <img src={GoogleApp} alt="" className='w-32' />
                            <img src={AppleApp} alt="" className='w-32' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Getthezomatoapp;
