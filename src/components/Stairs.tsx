"use client";
import { motion } from "framer-motion";

const stairAnimate = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
    const totalSteps = 8;
    return totalSteps - index - 1;
}


const Stairs = () => {
  return <>
    {[...Array(8)].map((_, index) => {
        return(

            <motion.div 
                key={index} 
                variants={stairAnimate} 
                initial="initial" 
                animate="animate" 
                exit="exit" 
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
                }}
                className="h-full w-full bg-white relative" 
            />
        )
    })}
  </>;
};

export default Stairs;
