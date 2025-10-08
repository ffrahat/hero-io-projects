import React from 'react';
import NotFoundImg from '../../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <img src={NotFoundImg} alt="Loading..." />
        </div>
    );
};

export default AppError;