import React from 'react';
import CopyrightYear from '../components/CopyrightYear';
import Socials from '../components/Socials';
import GraduateProgram from '../components/GraduateProgram';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/variants';

const Footer = () => {
  return (
    <div className="card flex justify-between items-center w-full text-xs md:text-sm absolute bottom-0">
      <CopyrightYear />
      <div className="flex justify-between items-center gap-8">
        <motion.div
          variants={fadeIn('down', 3.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <GraduateProgram />
        </motion.div>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
