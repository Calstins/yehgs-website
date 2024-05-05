import React from 'react';
import CopyrightYear from '../components/CopyrightYear';
import Socials from '../components/Socials';
import GraduateProgram from '../components/GraduateProgram';

const Footer = () => {
  return (
    <div className="card flex justify-between items-center w-full text-xs md:text-sm absolute bottom-0">
      <CopyrightYear />
      <div className="flex justify-between items-center gap-8">
        <GraduateProgram />
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
