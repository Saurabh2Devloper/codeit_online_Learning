import React from 'react';

const HelpPage = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-extrabold mb-4">Help Center</h1>

        {/* Sample sections */}
        <section className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
          <p>
            If you're new to our platform, here's how to get started with your online education journey.
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <p>
            Check out our frequently asked questions to find answers to common queries from other learners.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default HelpPage;
