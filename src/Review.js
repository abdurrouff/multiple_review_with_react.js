import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [counter, setCounter] = useState(0);
  const { name, job, text, image } = people[counter];
  function nextPerson() {
    setCounter((index) => {
      let newIndex = index + 1;
      if (newIndex < 4) {
        return newIndex;
      } else {
        return 0;
      }
    });
  }
  function prevPerson() {
    setCounter((index) => {
      let newIndex = index - 1;
      if (index > 0) {
        return newIndex;
      } else {
        return 3;
      }
    });
  }
  function randPerson() {
    setCounter((index) => {
      let newIndex = Math.floor(Math.random() * people.length);
      return newIndex;
    });
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />;
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>;<p className='job'>{job}</p>;
      <p className='info'>{text}</p>;
      <div className='button-container'>
        <button onClick={prevPerson} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randPerson} className='random-btn'>
        suprise me
      </button>
    </article>
  );
};

export default Review;
