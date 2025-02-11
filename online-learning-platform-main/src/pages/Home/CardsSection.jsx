import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HomeCards from "../Shared/HomeCards";

const CardsSection = () => {
  return (
    <div className='pt-20 bg-base-200 bg-opacity-50'>
      <div className='px-4 sm:px-8 lg:px-0 max-w-7xl mx-auto'>
        <p className='text-lg text-purple-600 font-semibold mb-2'>
          Structured Roadmaps
        </p>
        <h2 className='text-3xl sm:text-6xl font-bold mb-6'>
          What should I learn <br /> after{" "}
          <span className='bg-white-50'>
            <Typewriter
              cursor
              delaySpeed={3000}
              deleteSpeed={35}
              loop={0}
              typeSpeed={75}
              words={[
                "HTML and CSS",
                "React.js library",
                "Javascript basics",
                "Next.js framework",
                "Node.js"
              ]}
            />
          </span>
          ?
        </h2>
        <p
          className='font-medium text-lg sm:text-2xl mb-6 max-w-4xl'
          style={{ lineHeight: "40px" }}
        >
          Chances are that you're NOT willing to spend years of your time
          figuring out the right tech stack. We got you. Our industry experts
          figured out a perfect learning path for you that is short, complete,
          and fully relevant in 2022. Seriously.
        </p>
        <a
          className='text-lg md:text-2xl text-purple-600 font-semibold mb-2'
          href='https://react.dev/blog/2023/03/16/introducing-react-dev'
        >
          Learn more
        </a>
      </div>
      <HomeCards></HomeCards>
    </div>
  );
};

export default CardsSection;
