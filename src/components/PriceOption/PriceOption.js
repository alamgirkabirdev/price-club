import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h2><span className='text-5xl font-bold p-6 text-white'>{option.price}</span>
                <span className='text-2xl text-gray-200'>/mon</span>
                </h2>
                <p className='text-4xl my-4'>{option.name}</p>
                
            </div>
           {
            features.map((feature, idx) => <Feature 
                key={idx} 
                feature={feature}
            ></Feature>)
           }
           <button className='bg-green-500 w-full rounded-md py-2 text-white font-bold mt-6'>Buy Now</button>
        </div>
    );
};

export default PriceOption;