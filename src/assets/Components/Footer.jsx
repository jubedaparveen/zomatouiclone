import React from 'react';
import ZomatoImg from '../images/zomato.png'
import AppleApp from '../images/apple.jpg';
import GoogleApp from '../images/googleapp.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='max-w-[70rem] mx-auto '>

                <div className='flex justify-between p-4'>
                    <div className='mb-4'>
                        <img src={ZomatoImg} width={100} height={100} alt="" className='bg-black p-2' />
                    </div>
                    <div className='mb-4 flex gap-8'>
                        <div >
                            <Link href={'#'}>
                                <img src={GoogleApp} alt="" className='w-32' />
                            </Link>
                        </div>
                        <div>
                            <Link href={'#'}>
                                <img src={AppleApp} alt="" className='w-32' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=' p-4 grid grid-cols-5 gap-8 border-slate-800'>
                        <div className=''>

                            <div className=''>
                                <h2 className='mb-4 text-xl uppercase font-serif '> About Zomato </h2>
                                <ul className='space-y-1'>
                                    <li>Who We Are</li>
                                    <li> Blogs</li>
                                    <li> Work With Us</li>
                                    <li> Investor Relations</li>
                                    <li>Report Fraud </li>
                                    <li>Press Kit</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='mb-4 text-xl uppercase font-serif '>Zomaverse </h2>
                                <ul className='space-y-1'>
                                    <li>Zomato</li>
                                    <li>Blinket</li>
                                    <li>District</li>
                                    <li>Feeding India</li>
                                    <li>Hyperpure</li>
                                    <li>Zomato Live</li>
                                    <li>Zomaland</li>
                                    <li>Weather Union</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='mb-4 text-xl uppercase font-serif '> For Restaurants </h2>
                                <ul className='space-y-1'>
                                    <li>Partner with us</li>
                                    <li>Apps For You</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='mb-4 text-xl uppercase font-serif '>Learn More </h2>
                                <ul className='space-y-1'>
                                    <li>Privacy</li>
                                    <li>Security</li>
                                    <li>Terms</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='mb-4 text-xl uppercase font-serif'> Social Links </h2>
                                <div>
                                    <ul className='flex gap-2 text-center '>
                                        <li className='w-8 h-8 rounded-full border-2 border-slate-800'>1</li>
                                        <li className='w-8 h-8 rounded-full border-2 border-slate-800'>2</li>
                                        <li className='w-8 h-8 rounded-full border-2 border-slate-800'>3</li>
                                        <li className='w-8 h-8 rounded-full border-2 border-slate-800'>4</li>
                                        <li className='w-8 h-8 rounded-full border-2 border-slate-800'>5</li>
                                    </ul>
                                </div>
                                <div className='my-4 space-y-4'>
                                    <div >
                                        <Link href={'#'}>
                                            <img src={GoogleApp} alt="" className='w-32' />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'}>
                                            <img src={AppleApp} alt="" className='w-32' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='border-t p-4'>
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
