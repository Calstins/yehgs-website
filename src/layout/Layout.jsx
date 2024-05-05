import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../utils/useMousePosition';
import DownloadButton from '../components/DownloadButton';

const Layout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 40;
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="card flex justify-center items-center flex-col -mt-6">
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <div
            className="text-red flex items-center justify-center flex-col "
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <h1 className="font-bold text-[8rem] uppercase md:text-[10rem] text-ter">
              YEhgS
            </h1>
            <p className="-mt-4 text-xl md:text-2xl text-ter">
              FMCG Coffee Partner Worldwide
            </p>
          </div>
        </motion.div>
        <div className="body">
          <div className="flex items-center justify-center flex-col">
            <h1 className="font-bold text-[8rem] uppercase md:text-[10rem]">
              YEHgS
            </h1>
            <p className="-mt-4 text-xl md:text-2xl ">
              FMCG Coffee Partner Worldwide
            </p>
          </div>
        </div>
      </div>
      <DownloadButton className="" />
    </div>
  );
};

export default Layout;
