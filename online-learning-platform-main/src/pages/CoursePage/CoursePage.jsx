import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import SampleData from "./SampleData";
import { useNavigate } from "react-router-dom";
import GeneratePDFButton from "./GeneratePDFButton";

// For printing pdf

const ref = React.createRef();
const CoursePage = () => {

  const data = SampleData;
  console.log(data)

  const navigate = useNavigate();
  const handleNavigateToCheckout = () => {
    navigate('/checkout');
  };
    return (
      <div>
        <div className='bg-gradient-to-r from-hero-dark-black via-hero-light-black to-hero-dark-black pt-20 pb-16 px-4 text-white'>

<center>

          <h2 className='text-2xl md:text-4xl font-bold my-4 ml-9'>{data.title}                  </h2>
    
  
  

       
            <img src={data.img} alt='' />
        
          <div className= " mr-96 ml-96 mt-12 w-100 bg-gradient-to-b from-blue-500 via-blue-600 to-purple-700 rounded-3xl font-bold text-white text-3xl py-5 px-10 border-7 text-center border-blue-900 hover:bg-purple-400 hover:text-purple-900">
          <GeneratePDFButton/>
          

          <div>
          
       
            </div>
            
          </div>
          
          <p className='my-4 text-lg'>Level up your skills with {data.title}</p>
          <p className='mb-4 italic'>{data.time}+ hours of total content</p>
      
          <button 
      onClick={handleNavigateToCheckout}
      className=" mr-96 ml-96 mt-12 w-100 bg-gradient-to-b from-blue-500 via-blue-600 to-purple-700 rounded-3xl font-bold text-white text-3xl py-5 px-10 border-7 text-center border-blue-900 hover:bg-purple-400 hover:text-purple-900"
    >
      Go to Checkout
    </button>
   
      </center>
        
        </div>
        <div>
        
        </div>


        <div ref={ref} className='mt-12 container mx-auto lg:max-w-6xl px-4'>
          <div>
            <h1 className='font-bold text-2xl'>Goals</h1>
            <ul className='my-5'>
              {data.goals.map((goal) => (
                <li key={goal} className='flex items-center'>
                  <span className='text-green-700 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12.75l6 6 9-13.5'
                      />
                    </svg>
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='pb-10'>
            <h1 className='font-bold text-2xl'>Description</h1>
            <p className='max-w-2xl mt-4'>{data.description}</p>
          </div>
        </div>
      
      </div>
      
    );
  };
  
  

export default CoursePage;
