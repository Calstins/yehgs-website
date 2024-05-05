import { motion } from 'framer-motion';

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfPath = '/assets/Yehgs-Co-Ltd-Company-Profile.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'Yehgs-Co-Ltd-Company-Profile.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.button
      className=" px-6 py-2 rounded-md relative radial-gradient border border-spacing-1"
      initial={{ '--x': '100%', scale: 1 }}
      animate={{ '--x': '-100%' }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      onClick={handleDownload}
    >
      <span className="uppercase text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        download company profile
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default DownloadButton;
