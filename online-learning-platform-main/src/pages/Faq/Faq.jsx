import React from "react";

const Faq = () => {
  return (
    <div className='px-5 container mx-auto max-w-5xl'>
      <p className='mb-0 mt-16 max-w-2xl'>
        <small>EduOnline : 2023</small>
      </p>
      <h1 className='text-3xl sm:text-5xl font-bold mb-8'>
        About EduOnline - Frequently Asked Questions
      </h1>
      <div className=''>
        <img
          className='w-100 object-cover justify-center'
          src="https://media.istockphoto.com/id/1349998432/photo/3d-render-of-faqs-business-concept.jpg?s=612x612&w=0&k=20&c=qhvy7I8jjnyAagxavLXVwSsvbsErceBVyIqF2eyHxWw="
          alt=''
        />
      </div>
      <div className='sm:mx-16 lg:mx-0'>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>What is EduOnline ?</h2>
          <p className='mt-4 text-xl sm:text-2xl'>
           EduOnline is the Online Learning Platform.It provides Online Courses to Students.
           It Provides the Facility to the Remote Student to Learn at their PAce and with Comfort at their home.
           This is an Important Step to Improve the carrier of students by acquiring new skillset and boost thire inteligent mind and Creativity
          </p>
        </div>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            How to use EduOnline Platform ?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            You'll learn to code by completing coding challenges and building
            projects. You'll also earn verified certifications along the way.
          </p>
        </div>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            Can I develop my carrier by learning on EduOnline Platform for Software Developer Roll ?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            Yes. Every year, hundreds of people who join the EduOnline community
            get their first software developer job.
          </p>
        </div>
        <div className='my-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            How long will it take me to finish each of EduOnline's certifications?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            Each certification takes around enough hours of dedicated learning.
            You can Learn to code at your pace.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
