import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Classes from '../Classes/Classes';

const Services = () => {
    const allData = useLoaderData();
    console.log(allData)
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
           {
            allData.map(data => <Classes data={data} key={data.id}></Classes>)
           }
           
        </div>
    );
};

export default Services;