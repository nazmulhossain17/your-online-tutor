import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';

const Classes = ({data}) => {
    const {id, title, img} = data;
    return (
        <div>
           <p>{title}</p>
           <img src={img} alt=''/>
        </div>
    );
};

export default Classes;