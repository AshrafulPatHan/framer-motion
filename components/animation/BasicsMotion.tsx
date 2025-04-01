import * as motion from "motion/react-client"


export function BasicsMotion() {
    return(
        <div className="flex justify-center items-center h-screen w-screen ">
            <motion.div
            className="w-[120px] h-[120px] bg-amber-200 p-6 "
            initial={{
                rotate: "0deg",
            }}
            animate={{
                rotate: "360deg",
            }}
            transition={{
                duration:2,
                // type:"spring",
                ease:"backInOut"
            }}
            >
                <p className="text-center mt-5">motion</p>
            </motion.div> 
        </div>
    );
};