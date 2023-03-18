import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, img, price, summary} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handlePlacedOrder = event =>{
      event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            email,
            message
        }

        fetch('https://your-online-tutor-server.vercel.app/orders', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            alert('Order Placed Successful')
            form.reset();
          }
        })
        .catch(err => console.error(err))
    }
    return (
      <div>
        <h3>{user?.email}</h3>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} width="700px" className="rounded-lg shadow-2xl" alt=''/>
    <div>
    <form onSubmit={handlePlacedOrder}>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{summary}</p>
      <p className='text-2xl'>price: ${price}</p>
      <div className="rating">
      <p className='text-2xl'>Ratings: </p>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" required/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
<br/>
        
        <br/>
      
      <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered input-ghost w-full" readOnly/>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                <button className="btn btn-outline btn-success">Buy Now</button>
      </form>
    </div>
  </div>
  </div>
</div>
    );
};

export default Checkout;