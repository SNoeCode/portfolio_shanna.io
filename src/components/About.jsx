import React from 'react';
import shanna from '../assets/images/shanna1.jpg'
const About = () => {
  return (
    <>
    <section className="min-h-screen p-10 bg-mint text-gray-700">
     

      <div className="mb-6">
<span>
        <h3 className="text-xl font-semibold mb-2">Bio</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea tempore dolor maiores adipisci, a debitis aspernatur quasi maxime repellat est eos laboriosam! Dolor quae obcaecati, quos quibusdam accusamus sapiente, asperiores voluptas voluptatum voluptatem eos illum veritatis, atque suscipit. Magni totam, rerum iure accusantium earum odio quae reiciendis voluptates voluptatem quos esse magnam aliquam eligendi?</p>
      <img src={shanna} alt="About Pic" className="mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
</span>
      </div>
    </section>
<section>


      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>GitHub</li>
        </ul>
      </div>
</section>
<section>

      <div  className="text-xl  mb-2 text-white">
        <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
        <p>Columbia University - Spring 2025 Cohort</p>
    
      </div>
</section>
    </>
  );
};

export default About;