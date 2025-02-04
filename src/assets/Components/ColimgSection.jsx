import React from 'react';
import { Link } from 'react-router-dom';
import ColImg1 from '../images/colimg1.jpg';
import ColImg2 from '../images/colimg2.jpg';
import ColImg3 from '../images/colimg3.jpg';
import ColImg4 from '../images/colimg4.jpg';
import { IoIosPlay } from "react-icons/io";

const ColimgSection = () => {

    const Colimg = [
        {
            colImgSection: ColImg1,
            title: 'Best of live screenings',
            pragraph: '23 places'
        },
        {
            colImgSection: ColImg2,
            title: '11 Romantic Dining Places', 
            pragraph: '12 places'
        },
        {
            colImgSection: ColImg3,
            title: '17 Great Cafes',
            pragraph: '19 places'
        },
        {
            colImgSection: ColImg4,
            title: '12 Local Favourte Places',
            pragraph: '12 places'
        }
    ]
    return (
        <>
            {Colimg.map((v, i) => (
                <div className='w-1/4  border relative border-rose-500'>
                    <img src={v.colImgSection} alt="" className='w-full h-80 brightness-50' />
                    <div className='p-2 absolute bottom-0 w-full text-white backdrop-grayscale-0'>
                        <p className='text-lg w-full'>{v.title}</p>
                        <div className='flex justify-between text-lg w-full'>
                            <p>{v.pragraph}</p>
                            <Link to={'/'}><span className='mt-1'><IoIosPlay /></span></Link> 
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default ColimgSection;
