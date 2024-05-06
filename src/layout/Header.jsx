import React from 'react';
import Logo from '../assets/yehgs-co-logo.svg';
import Quote from '../components/Qoute';
import { fadeIn } from '../utils/variants';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="card flex  justify-center md:justify-between items-center w-full absolute top-0">
      <div className="flex justify-center items-center gap-2">
        <img src={Logo} alt="company logo" className="w-[61px] h-[30px]" />
        <span className="text-4xl capitalize font-semibold">YEHGS</span>
      </div>
      <motion.div
        variants={fadeIn('down', 3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:block"
      >
        <Quote
          text="The quality of a product or service alone does not guarantee success; it is the trust and loyalty forged between brand and consumer that sustains prosperity"
          author="Immanuel Kant"
        />
      </motion.div>
    </div>
  );
};

export default Header;
