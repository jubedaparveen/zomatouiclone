import React from 'react';
import onlineOrder from '../images/order.jpg';
import onlineDinner from '../images/online.jpg';
import onlineEvent from '../images/event.jpeg';

const Threecolsection = () => {
    const data =[
        {
            imgAdd: onlineOrder,
            title:'Online Order',
            description:'Stay home and order to your doorstep'
        },
        {
            imgAdd: onlineDinner,
            title:'Dining',
            description:"View the city's favourite dining venues"
        },
        {
            imgAdd: onlineEvent,
            title:'Live Events',
            description:'Discover India’s best events & concerts'
        }
    ]
    return (
        <>
            <div className='max-w-[70rem] mx-auto my-16 flex gap-10 ' >

                {data.map((v,i)=>(
                    <div className='w-1/3  rounded-t-lg border-2 border-gray-200 shadow-lg hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300'>
                    <div className='h-48  overflow-hidden'>
                        <img src={v.imgAdd} alt="" className='w-full  rounded-t-lg'/>
                    </div>
                    <div>
                        <h3 className='p-2 text-2xl'>{v.title}</h3>
                        <p className='px-2 pb-2 '> {v.description}</p>
                    </div>
                </div>
                ))}
                
            </div>
        </>
    )
}

export default Threecolsection;
