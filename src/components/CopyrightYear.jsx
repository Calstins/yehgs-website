import React, { useState, useEffect } from 'react';

const CopyrightYear = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span>&copy; {currentYear} YEGHS CO LTD. All Rights Reserved.</span>;
};

export default CopyrightYear;
