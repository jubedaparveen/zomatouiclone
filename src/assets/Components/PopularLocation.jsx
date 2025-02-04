import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PopularLocation = () => {
    const [locationsToShow, setLocationsToShow] = useState([]);
    const [actionIs, setActionIs] = useState(true)

    const popularLocations = [
        {
            title: 'Vijay Nager',
            description: "1292 Places"
        },
        {
            title: 'New Palasia',
            description: "163 Palces"
        },
        {
            title: 'Old Palasia',
            description: "240 Places"
        },
        {
            title: 'Bhawar Kuan',
            description: "456 Places"
        },
        {
            title: 'Rau',
            description: "166 Places"
        },
        {
            title: 'By Pass Road (North)',
            description: "191 Places"
        },
        {
            title: 'South Tukoganj',
            description: "155 Places"
        },
        {
            title: 'Sapna Sangeeta',
            description: "134 Places"
        },
        {
            title: 'RNT Marg',
            description: "59 Places"
        },
        {
            title: 'By Pass Road (South)',
            description: "155 Places"
        },
        {
            title: 'Sarwate Bus Stand',
            description: "46 Places"
        },
        {
            title: 'Geeta Bhawan',
            description: "106 Places"
        },
        {
            title: 'YN Road',
            description: "52 Places"
        },
        {
            title: 'HIG - LIG',
            description: "177 Places"
        },
        {
            title: 'MR 10Road',
            description: "185 Places"
        },
        {
            title: 'Rajender Nagar',
            description: "178 Places"
        },
        {
            title: 'Khajrana',
            description: "176 Places"
        },
        {
            title: 'Sudama NAgar',
            description: "154 Places"
        },
        {
            title: 'Sarafa Bazaar',
            description: "45 Places"
        },
        {
            title: 'Annapurna Road',
            description: "128 Places"
        },
        {
            title: 'Press Complex',
            description: "100 Places"
        },
        {
            title: 'Manik Bagh Road',
            description: "80 Places"
        },
        {
            title: 'Chhavani',
            description: "43 Places"
        },
        {
            title: 'Ranjeet Hanuman',
            description: " Places"
        },
        {
            title: 'Jail Road',
            description: "47 Places"
        },
        {
            title: 'Bombay Bazaar',
            description: "25 Places"
        }
    ];

    useEffect(()=>{
        setLocationsToShow(popularLocations.slice(0, 8));
    },[]);

    const setactionToShow = ()=>{
        if(actionIs){
            setLocationsToShow(popularLocations);
        }
        else
        {
            setLocationsToShow(popularLocations.slice(0, 8));
        }
        setActionIs(!actionIs);

    }

    

    return (
        <>
            <div className='max-w-[70rem]  mx-auto mb-16'>
                <div className='text-4xl mb-6'>
                    <h2>Popular localities in and around Indore</h2>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {locationsToShow.map((v, i) => (

                        <div className=' border p-4 shadow-lg'>
                            <Link to={'/'}>
                                <div className='flex justify-between w-full'>
                                    <div className='text-lg'>
                                        <h2>{v.title}</h2>
                                        <h2 className='text-base'>{v.description}</h2>
                                    </div>
                                    <div className='mt-4'> <IoIosArrowForward /></div>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <div className=' border p-4 shadow-lg' onClick={setactionToShow}>
                        
                            <div className='flex text-xl mt-3 justify-center w-full'>
                                <div className='' >
                                    <h2 className=' me-3'>{actionIs ? 'Show more' : 'Show less'} </h2>
                                </div>
                                <div className='mt-2 '>
                                    <span> 
                                        {actionIs ? (<IoIosArrowDown />) : (<IoIosArrowUp />)}
                                    </span>
                                </div>
                            </div>
                        
                    </div>
                </div>


            </div>

        </>
    )
}

export default PopularLocation;
