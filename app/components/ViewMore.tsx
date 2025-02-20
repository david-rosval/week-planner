import { Link } from '@remix-run/react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export default function ViewMore() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="flex justify-end view-more">
      <Link 
        to="/objectives" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        className="flex items-center overflow-hidden bg-gray-700 py-2 px-3 rounded-full relative transition-transform duration-75 ease-in-out active:scale-90" 
      >
        <motion.div 
          animate={{ 
            left: isHovered ? 0 : "-130%",
            transition: {
              duration: 0.3
            }
          }}
          className='absolute h-[39px] w-[118px] rounded-r-full bg-blue-500 left-[-130%]' 
        />
        <p className='z-10'>
          View more
        </p>
        <AnimatePresence>
          {isHovered && (
            <motion.div initial={{  scale: 0, width: 0, marginLeft: 0 }} animate={{  scale: 1, width: "auto", marginLeft: 8 }} exit={{  scale: 0, width: 0, marginLeft: 0 }} className='z-10' >
              <ArrowRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  )
}
