import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className=" w-[30vw] text-xs">
      <blockquote className="italic font-thin">
        <p>{text}</p>
        <footer className="text-sec">{author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
