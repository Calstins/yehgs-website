import React from 'react';
import CopyrightYear from '../components/CopyrightYear';
import Socials from '../components/Socials';
import GraduateProgram from '../components/GraduateProgram';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Footer = () => {
  return (
    <div className="card flex justify-between items-center w-full text-xs md:text-sm absolute bottom-0 flex-col md:flex-row gap-4">
      <div className="flex justify-between items-center gap-8">
        <Socials />
        <motion.div
          variants={fadeIn('down', 3.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <GraduateProgram />
        </motion.div>
      </div>
      <CopyrightYear className="copyright" />
    </div>
  );
};

export default Footer;
