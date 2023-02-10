import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {
    const [phone, setPhone]= useState([])
    useEffect( ()=> {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data => {})

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            console.log(phonesLoaded);
        });

    }, [])
    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;