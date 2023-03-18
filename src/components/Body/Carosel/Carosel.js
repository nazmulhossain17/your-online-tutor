import React from 'react';
import { Link } from 'react-router-dom';


const Carosel = () => {

  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="mx-auto" alt=''/>
    <div className='absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4'>
        <h1 className='text-6xl'><br/>
        Welcome to my ClassRoom<br/>
        And my Teaching Zone
        </h1>
       
    </div>
    <div className='absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2'>
    <Link to='/services'><button className='btn btn-wide btn-outline btn-success mb-20 mx-auto'>My Services</button></Link>
    </div>
 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>

  );
};

export default Carosel;