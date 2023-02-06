import React from 'react';

const PriceOption = ({option}) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h2><span className='text-6xl font-extrabold text-red'>{option.price}</span>
                <span className='text-2xl text-gray-200'>/mon</span>
                </h2>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PriceOption;