import React from 'react';
import shanna from '../assets/images/shanna1.jpg';

const About = () => {
  return (
    <>
      {/* About Me Section */}
      {/* <section className="min-h-screen p-10 bg-mint text-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
       
          <div className="max-w-lg text-white bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Bio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea tempore dolor maiores adipisci, 
              a debitis aspernatur quasi maxime repellat est eos laboriosam!
            </p>
          </div>

         
          <div>
            <img src={shanna} alt="Shanna" className="w-64 h-64 rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section> */}
<section className="min-h-[80vh] pt-24 p-10 bg-mint text-gray-700 flex items-center justify-center">
  <div className="flex flex-wrap items-center justify-center gap-10">
    {/* About Me Text */}
    <div className="max-w-lg text-white bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">Bio</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea tempore dolor maiores adipisci, 
        a debitis aspernatur quasi maxime repellat est eos laboriosam!
      </p>
    </div>

    {/* Profile Image */}
    <div>
         <div className="bg-mint text-lavender">
       Custom Colors Example
     </div>
      <img src={shanna} alt="Shanna" className="w-64 h-64 rounded-lg shadow-lg object-cover" />
    </div>
  </div>
</section>
      {/* Education, Experience, and Skills Section */}
      <section className="p-10 bg-gray-900 text-white">
        <div className="flex flex-wrap justify-around gap-10">
          {/* Education */}
          <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Persevere Tech Alliance from 2023-2025</p>
            <p></p>
            <p>Columbia University</p>
          </div>

          {/* Experience */}
          <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p>Banyan Labs current</p>
          </div>

          {/* Skills */}
          <div className="max-w-md bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>GitHub</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;


// import React from 'react';
// import shanna from '../assets/images/shanna1.jpg'
// const About = () => {
//   return (
//     <>
//     <section className="min-h-screen p-10 bg-mint text-gray-700">
     

//       <div className="mb-6">
// <span>
//         <h3 className="text-xl font-semibold mb-2">Bio</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea tempore dolor maiores adipisci, a debitis aspernatur quasi maxime repellat est eos laboriosam! Dolor quae obcaecati, quos quibusdam accusamus sapiente, asperiores voluptas voluptatum voluptatem eos illum veritatis, atque suscipit. Magni totam, rerum iure accusantium earum odio quae reiciendis voluptates voluptatem quos esse magnam aliquam eligendi?</p>
//       <img src={shanna} alt="About Pic" className="mx-auto mb-6" />
//       <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
// </span>
//       </div>
//     </section>
// <section>


//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Skills</h3>
//         <ul className="list-disc list-inside">
//           <li>React</li>
//           <li>JavaScript</li>
//           <li>HTML & CSS</li>
//           <li>GitHub</li>
//         </ul>
//       </div>
// </section>
// <section>

//       <div  className="text-xl  mb-2 text-white">
//         <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
//         <p>Columbia University - Spring 2025 Cohort</p>
    
//       </div>
// </section>
//     </>
//   );
// };

// export default About;