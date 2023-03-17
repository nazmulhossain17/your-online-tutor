import React from 'react';

const Hero = () => {
    return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Learn From the Best</h1>
      <p className="py-6">Choosing our courses you’ll receive a full package of educational materials including lectures, video trainings, books and practical tasks that provide a proper learning process.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;