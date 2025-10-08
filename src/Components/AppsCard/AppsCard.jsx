import React from 'react';
import DownloadIcon from '../../assets/icon-downloads.png'
import Ratingcon from '../../assets/icon-ratings.png'


const AppsCard = ({ app }) => {
    const { title, image, } = app;
    return (
        <div className='p-2 md:p-4 rounded-xl shadow-sm'>
            <div className='w-full'><img className='mx-auto w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105' src={image} alt="" /></div>
            <div className='space-y-2 mt-4'>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <div className='flex items-center justify-between'>
                    <p className='text-[#2ED99F] font-semibold flex items-center justify-center'><img  className='w-[15px] h-[15px] mr-2'src={DownloadIcon} alt="" />9M</p>
                    <p className=' flex items-center justify-center bg-amber-100 px-2'> <img className='w-[15px] h-[15px] mr-2' src={Ratingcon} alt="" />5</p>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;