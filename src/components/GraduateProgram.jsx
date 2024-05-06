import React from 'react';
import New from '../assets/new.gif';
import { motion } from 'framer-motion';

const GraduateProgram = () => {
  const handleDownload = () => {
    const pdfPath = '/assets/Graduate-Trainee-Program.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Graduate-Trainee-Program.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onClick={handleDownload}
      className="flex justify-center items-center hover:text-sec cursor-pointer"
    >
      <span>Graduate Training Program</span>
      <img src={New} alt="new" className="w-[50px] h-[24px]" />
    </motion.div>
  );
};

export default GraduateProgram;
