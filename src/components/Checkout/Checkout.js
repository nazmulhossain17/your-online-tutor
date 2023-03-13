import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title, img, price, summary} = useLoaderData();
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} width="700px" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{summary}</p>
      <p className='text-2xl'>price: ${price}</p>
      <div className="rating">
      <p className='text-2xl'>Ratings: </p>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
<br/>
        
        
        <br/>
      <button className="btn btn-outline btn-success">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Checkout;