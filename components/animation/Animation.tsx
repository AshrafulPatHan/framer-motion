import * as motion from "motion/react-client"


export default function MotionAnimation() {
    return(
        <div 
        className="flex flex-col gap-5 justify-center items-center  w-screen ">
            <motion.div>
                <motion.button 
                className="w-[205px] bg-blue-600 rounded-3xl p-3 cursor-pointer  "
                whileHover={{
                    scale:1.05
                }}
                whileTap={{
                    scale:0.9,
                    rotate:"360deg"
                }}
                transition={{
                    duration:2,
                    // times:3,
                    ease:"anticipate"
                }}
                >
                    click
                </motion.button>
            </motion.div>
        </div>
    )
}
