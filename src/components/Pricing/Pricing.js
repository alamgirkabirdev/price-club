import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price:0, features:
       [ 'Awesome Feature',
        'Extra feature',
        'Unnesxessary feature',
        'Will never feature',
        'Hudai feature',
        'Ajaira feature']
    },
        {id: 2, name: 'Medium', price:9.99, features:
        [ 'Awesome Feature',
         'Extra feature',
         'Unnesxessary feature',
         'Will never feature',
         'Hudai feature',
         'Ajaira feature']},
        {id: 3, name: 'Premium', price:10, features:
        [ 'Awesome Feature',
         'Extra feature',
         'Unnesxessary feature',
         'Will never feature',
         'Hudai feature',
         'Ajaira feature']},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-6 text-white'>Best Deal of the Town</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOption
                    key={option.id}
                    option = {option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;