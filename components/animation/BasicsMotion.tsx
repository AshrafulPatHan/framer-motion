"use client";
import * as motion from "motion/react-client"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


export function BasicsMotion() {
    const [isClick,setIsClick] = useState(false);
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen w-screen ">
            <motion.button 
            className="w-[125px] bg-blue-600 rounded-3xl p-1 cursor-pointer  "
            onClick={()=>setIsClick(!isClick)}
            layout
            >
                click
            </motion.button>
            <AnimatePresence 
            mode="popLayout"
            >
            {isClick && (
                <motion.div
                className="w-[220px] h-[220px] bg-amber-200 p-6 rounded-2xl "
                initial={{
                    rotate: "0deg",
                }}
                animate={{
                    rotate: "360deg",
                    scale:1,
                    y:[0,54,-10,0],
                    x:54
                }}
                exit={{
                    rotate: "0deg"
                }}
                transition={{
                    duration:3,
                    // type:"spring",
                    ease:"backInOut",
                    times:[0,0.7,0.5]
                }}
                >
                    <p className="text-center mt-[70px]  ">motion</p>
                </motion.div> 
            )}
            </AnimatePresence>
        </div>
    );
};