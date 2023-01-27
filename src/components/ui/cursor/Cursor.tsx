import { useEffect, useState } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';
import * as React from 'react';

const Cursor = () => {
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e: any) => {
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: smallcircle.x - 10,
          y: smallcircle.y - 10,
          transition: { type: 'spring', mass: 1 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
