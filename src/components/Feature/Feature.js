import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className=''flex item-cencter>
            <CheckCircleIcon className="h-6 w-6  text-green-500"/>
            <p className=' h-6 '>{feature}</p>
        </div>
    );
};

export default Feature;