'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Briefcase, Calendar, Award } from 'lucide-react'
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

const workExperiences = [
  {
    id: 1,
    company: 'PT Maro Anugrah Jaya',
    position: 'Full Stack Developer',
    period: 'Sep 2024 - Present',
    description: 'Developing and maintaining full-stack web applications using React, Next.js, and Node.js with a focus on performance and user experience.',
    achievements: [
      'Optimized web application performance by implementing React and Next.js best practices, resulting in a 40% improvement in loading speed',
      'Developed RESTful APIs using Express and MySQL serving over 1000 daily requests',
      'Implemented responsive UI/UX using Tailwind CSS and TypeScript, increasing user engagement by 35%'
    ],
    skills: ['React', 'Next.js', 'PHP', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    color: 'bg-blue-500'
  },
  {
    id: 2,
    company: 'PT Solusi Usaha Berdikari',
    position: 'Website Developer',
    period: 'Feb 2024 - Jul 2024',
    description: 'Developing and maintaining web applications with a focus on front-end development and user interface optimization using modern JavaScript frameworks.',
    achievements: [
      'Implemented responsive design patterns and optimized code structure, reducing load time by 40%',
      'Developed and integrated new features using React.js, leading to a 15% increase in user engagement',
      'Actively contributed to team knowledge sharing and documentation, improving development workflow efficiency'
    ],
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Git', 'REST APIs'],
    color: 'bg-green-500'
  },
]

export default function EnhancedWorkExperienceJourney() {
  const [activeExperience, setActiveExperience] = useState(workExperiences[0].id)

  return (
    <div className="min-h-screen bg-[#070F2B] pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-bold text-center text-[#9290C3] mb-12 ${playfair.className}`}
        >
          My Professional Journey
        </motion.h1>
        
        <div className="relative inset-0">
          {/* Journey Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#535C91]" />
          
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-1/2 px-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-[#1B1A55] p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                    activeExperience === experience.id ? 'ring-4 ring-[#535C91]' : ''
                  }`}
                  onClick={() => setActiveExperience(experience.id)}
                >
                  <h3 className={`text-2xl font-semibold text-[#9290C3] mb-2 ${playfair.className}`}>{experience.company}</h3>
                  <p className={`text-lg text-[#535C91] mb-2 ${montserrat.className}`}>{experience.position}</p>
                  <p className={`text-sm text-[#535C91] flex items-center ${montserrat.className}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.period}
                  </p>
                </motion.div>
              </div>
              
              <div className="w-1/2 flex justify-center items-center">
                <motion.div 
                  className={`w-12 h-12 ${experience.color} rounded-full flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="text-white w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Experience Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-[#1B1A55] p-8 rounded-lg shadow-xl"
          >
            {workExperiences.find(exp => exp.id === activeExperience) && (
              <>
                <h2 className={`text-3xl font-bold text-[#9290C3] mb-4 ${playfair.className}`}>
                  {workExperiences.find(exp => exp.id === activeExperience)?.company}
                </h2>
                <p className={`text-xl text-[#535C91] mb-6 ${poppins.className}`}>
                  {workExperiences.find(exp => exp.id === activeExperience)?.description}
                </p>
                <h3 className={`text-2xl font-semibold text-[#9290C3] mb-4 flex items-center ${playfair.className}`}>
                  <Award className="w-6 h-6 mr-2 text-[#535C91]" />
                  Key Achievements
                </h3>
                <ul className="list-none space-y-4 mb-6">
                  {workExperiences.find(exp => exp.id === activeExperience)?.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <MapPin className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      <span className={`text-[#535C91] ${montserrat.className}`}>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
                <h3 className={`text-2xl font-semibold text-[#9290C3] mb-4 ${playfair.className}`}>Skills Used</h3>
                <div className="flex flex-wrap gap-2">
                  {workExperiences.find(exp => exp.id === activeExperience)?.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`px-3 py-1 bg-[#535C91] text-white rounded-full text-sm font-medium ${montserrat.className}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}