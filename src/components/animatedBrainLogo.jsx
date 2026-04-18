import { motion } from "framer-motion";

export default function AnimatedBrainLogo() {
  return (
    <motion.div
      className="flex justify-center items-center my-6 md:my-10" 
      animate={{
        y: [0, -20, 0], 
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <img 
        src="/src/assets/brain2.png" 
        alt="MindQuest Cérebro Logo" 
        className="w-56 h-56 md:w-72 md:h-72 object-contain filter drop-shadow-[0_20px_30px_rgba(34,197,94,0.3)]"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src="https://via.placeholder.com/300?text=Cerebro+MindQuest";
        }}
      />
    </motion.div>
  );
}