import React from 'react';
import Logo from '../assets/yehgs-co-ltd.png';
import Quote from '../components/Qoute';

const Header = () => {
  return (
    <div className="card flex justify-between items-center w-full absolute top-0">
      <div className="flex justify-center items-center gap-2">
        <img src={Logo} alt="company logo" className="w-[61px] h-[30px]" />
        <span className="text-4xl capitalize font-semibold">YEHGS</span>
      </div>
      <Quote
        text="The quality of a product or service alone does not guarantee success; it is the trust and loyalty forged between brand and consumer that sustains prosperity"
        author="Immanuel Kant"
      />
    </div>
  );
};

export default Header;
