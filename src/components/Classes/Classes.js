import React from 'react';
import { Link } from 'react-router-dom';

const Classes = ({data}) => {
    const {_id, title, img, summary} = data;
    return (
        
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{summary}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-primary">See Details</button>
      </Link>
    </div>
  </div>
      
</div>
    );
};

export default Classes;