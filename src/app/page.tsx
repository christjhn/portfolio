'use client'

import { useTranslation } from 'next-i18next';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import SUB from "../../public/assets/logosub.png";
import MARO from "../../public/assets/logomaro.png";
import WBNJ from "../../public/assets/logowbnj.png";
import BOWBO from "../../public/assets/logobowbo.png";
import KMP from "../../public/assets/logokmp.png";
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="portfolio min-h-screen bg-[#070F2B] flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center"
      >
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-md md:text-xl font-bold text-[#535C91] ${montserrat.className}`}
        >
          Hello, I'm
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-2xl md:text-6xl font-bold text-[#9290C3] mt-2 ${playfair.className}`}
        >
          Christoper John Aranda
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-xl md:text-3xl font-bold text-[#535C91] mt-2 ${montserrat.className}`}
        >
          A Passionate Full Stack Developer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={`text-sm md:text-md font-medium text-[#9290C3] text-center mt-2 ${poppins.className}`}
        >
          I specialize in building seamless web applications using technologies like JavaScript, React, and Node.js.<br/>
          Committed to continuous learning, I'm always eager to tackle new challenges. Let's connect and create something amazing together!
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex mt-10"
      >
        <Link href="https://wa.me/6285648806508">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-md border-double border-4 border-[#535C91] py-2 px-4 text-center text-[#535C91] hover:bg-[#535C91] hover:text-white hover:border-white ${montserrat.className}`}
          >
            Let's Talk
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 flex flex-col"
      >
        <motion.p 
          className={`text-sm md:text-md text-[#9290C3] text-center mt-20 ${montserrat.className}`}
        >
          Worked With
        </motion.p>
        <div className="flex justify-around items-center mt-2 gap-4">
          {[SUB, MARO, WBNJ, BOWBO, KMP].map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image 
                className="h-40 w-auto grayscale hover:grayscale-0 transition duration-300" 
                src={logo} 
                alt={`web${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
