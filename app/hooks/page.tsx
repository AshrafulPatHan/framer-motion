"use client";
import { useAnimationControls } from "framer-motion";
import * as motion from "motion/react-client"

export default function MotionHooks() {
    const control = useAnimationControls()
    const handelClick = ()=>{
        console.log("Animation Started!");
        control.start({
            rotate: "360deg",
            y: [0, 52, -5, 0],
            x: [0, 10, -10, 0],
            transition: {
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 0.7, 1]
            }
        });
    }
    return(
        <div className="flex flex-col items-center gap-5 justify-center my-20 mb-20">
            <motion.button
            className="w-[125px] bg-blue-600 rounded-3xl p-1 cursor-pointer  "
            onClick={handelClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                click
            </motion.button>
            <motion.div
            className="w-[220px] h-[220px] bg-amber-200 p-6 rounded-2xl "
            initial={{ rotate: 0, y: 0, x: 0 }}
            animate={control}
            exit="exit"
            ></motion.div>
        </div>
    )
}