import React from 'react';
import { FaReact, FaDatabase, FaFire, FaJava, FaJsSquare } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si'; // Ensure you have this package installed
import { animate, motion } from "framer-motion"
const iconsMove=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse", 
        }
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}}className="my-20 text-center text-4xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <motion.div variants={iconsMove(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaReact className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconsMove(3)} initial="initial" animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiFlutter className="text-6xl text-blue-400" />
        </motion.div>
        < motion.div variants={iconsMove(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaFire className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconsMove(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaDatabase className="text-6xl text-green-500" />
        </motion.div>
        <motion.div variants={iconsMove(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaJava className="text-6xl text-red-500" />
        </motion.div>
        <motion.div variants={iconsMove(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaJsSquare className="text-6xl text-yellow-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
