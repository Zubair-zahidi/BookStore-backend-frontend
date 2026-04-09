import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Rocket, Zap, BookOpen, ChevronDown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 50
      const y = (clientY / window.innerHeight - 0.5) * 30
      setMousePosition({ x, y })
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = window.innerHeight * 0.5
      const progress = Math.min(scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const floatingElements = [
    { icon: <BookOpen />, x: 10, y: 20, delay: 0, color: 'from-purple-500 to-pink-500' },
    { icon: <Star />, x: 85, y: 40, delay: 0.2, color: 'from-yellow-500 to-orange-500' },
    { icon: <Rocket />, x: 20, y: 70, delay: 0.4, color: 'from-cyan-500 to-blue-500' },
    { icon: <Zap />, x: 75, y: 80, delay: 0.6, color: 'from-emerald-500 to-green-500' },
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Moving Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            delay: element.delay,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
            repeatType: "reverse"
          }}
          className="absolute z-10"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${element.color} backdrop-blur-md border border-white/10 shadow-2xl`}>
            <div className="text-white">
              {element.icon}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-white/10 backdrop-blur-lg mb-8"
        >
          <Sparkles className="w-5 h-5 text-cyan-300" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            INTERSTELLAR READING EXPERIENCE
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150" />
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse delay-300" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">DISCOVER BOOKS</span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              FROM ANOTHER DIMENSION
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Explore a universe of knowledge with our quantum-powered library. 
          Every book is a portal to new worlds, powered by cutting-edge 3D technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/20"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              <span>Explore Library</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Particle trail on hover */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-32 transition-all duration-300" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 text-gray-300 font-semibold text-lg hover:text-white hover:border-cyan-500/30 transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              <span>Launch Demo</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
        >
          {[
            { value: "10K+", label: "Cosmic Books", color: "from-cyan-400 to-blue-500" },
            { value: "500+", label: "Authors", color: "from-purple-400 to-pink-500" },
            { value: "50+", label: "Categories", color: "from-emerald-400 to-green-500" },
            { value: "∞", label: "Possibilities", color: "from-orange-400 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-900/10 border border-gray-800 backdrop-blur-sm"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Parallax Text Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 text-9xl font-black text-gray-900/10 select-none"
          style={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
        >
          COSMIC
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 text-9xl font-black text-gray-900/10 select-none"
          style={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
        >
          BOOKS
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50"
        style={{
          scaleX: scrollProgress,
          transformOrigin: "left",
        }}
      />
    </section>
  )
}