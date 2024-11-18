'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Playfair_Display, Poppins, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const montserrat = Montserrat({ subsets: ['latin'] })

// Add interface for Project type
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubLink: string
  liveLink: string
}

// Add type for ProjectCard props
interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

const projects = [
  {
    id: 1,
    title: 'Website for Calculating Water Usage Billing',
    description: 'A full-stack website for calculating water usage billing and secure payment integration.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    liveLink: 'https://ecommerce-platform-demo.com'
  },
  {
    id: 2,
    title: 'Restaurant Landing Page',
    description: 'A landing page for a restaurant with a menu and orders system.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MYSQL'],
    githubLink: 'https://github.com/yourusername/restaurant-landing-page',
    liveLink: 'https://restaurant-landing-page-demo.com'
  },
  {
    id: 3,
    title: 'Company Profile Website',
    description: 'A website for a company to showcase their services and products.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'Bootstrap', 'CSS', 'HTML'],
    githubLink: 'https://github.com/yourusername/company-profile-website',
    liveLink: 'https://company-profile-website-demo.com'
  },
  {
    id: 4,
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile app for tracking workouts, nutrition, and personal fitness goals.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React Native', 'Redux', 'Express.js', 'PostgreSQL'],
    githubLink: 'https://github.com/yourusername/fitness-tracker-app',
    liveLink: 'https://fitness-tracker-demo.com'
  }
]

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#535C91] rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onClick(project)}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-1 bg-[#070F2B] text-[#9290C3] rounded-full text-xs"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [direction, setDirection] = useState<number>(0)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setDirection(0)
  }

  const handlePrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[prevIndex])
    setDirection(-1)
  }

  const handleNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
    setDirection(1)
  }

  return (
    <div className="min-h-screen bg-[#070F2B] text-[#9290C3] py-16 px-4 sm:px-6 lg:px-8 font-montserrat pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-bold text-center mb-12 text-[#9290C3] ${playfair.className}`}
        >
          My Projects
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-[#535C91] rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <motion.h2 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-bold mb-6 text-white"
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </motion.div>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/80 mb-6"
                >
                  {selectedProject.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1 bg-[#070F2B] text-[#9290C3] rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex space-x-4"
                >
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-[#070F2B] hover:bg-[#1a2344] text-[#9290C3] rounded-lg transition-colors"
                  >
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-[#070F2B] hover:bg-[#1a2344] text-[#9290C3] rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </a>
                </motion.div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={handlePrevProject}
                    className="p-2 bg-[#070F2B] rounded-full text-[#9290C3] hover:bg-[#1a2344] transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={handleNextProject}
                    className="p-2 bg-[#070F2B] rounded-full text-[#9290C3] hover:bg-[#1a2344] transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}