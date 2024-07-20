import React from 'react'
import { useState } from 'react';

const FinalModel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSuccessfulPurchase = () => {
    // Perform your successful purchase logic here
    // For example, after a successful API request or form submission
    // Show the modal when the purchase is successful
    setModalOpen(true);
  };
  return (
    <div><input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Congratulations!</h3>
          <p className='py-4'>
            You have successfully purchased the course:
            <span className='font-semibold'>{"HTML 5 Advance Course"} </span>
            for
          </p>
          <p className='py-4'>
            Email: <span className='font-semibold'>{""}</span>
          </p>
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn'>
              <Link to='/'>Go Back to Home</Link>
            </label>
          </div>
        </div>
      </div></div>
  )
}

export default FinalModel