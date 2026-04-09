import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  Star, 
  Zap, 
  BookOpen, 
  ExternalLink, 
  Heart, 
  Bookmark, 
  Share2, 
  Clock,
  Users,
  Eye,
  Sparkles,
  ChevronRight,
  Play,
  Layers
} from 'lucide-react'

export default function CosmicBookCard({ book, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const cardRef = useRef(null)
  const controls = useAnimation()
  
  // Mouse position tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      setMousePosition({ x, y })
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      return () => card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Animation sequence
  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: 1.05,
        rotateY: 5,
        rotateX: -2,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      })
    } else {
      controls.start({
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      })
    }
  }, [isHovered, controls])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: mousePosition.x,
        rotateX: -mousePosition.y,
        transition: { 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow Effect */}
      {isHovered && (
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse" />
      )}

      {/* Main Card Container */}
      <motion.div
        animate={controls}
        className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 30px rgba(6, 182, 212, 0.3)' 
            : '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Mesh */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/5 via-transparent to-transparent" />
          
          {/* Moving Particles */}
          {isHovered && (
            <>
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                  initial={{ 
                    x: Math.random() * 100 + '%', 
                    y: Math.random() * 100 + '%',
                    scale: 0 
                  }}
                  animate={{ 
                    x: Math.random() * 100 + '%', 
                    y: Math.random() * 100 + '%',
                    scale: [0, 1, 0],
                    rotate: 360 
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Book Cover Section */}
        <div className="relative p-6">
          {/* Book Cover Image with 3D Effect */}
          <div className="relative mb-6">
            <div className="relative w-full h-64 rounded-xl overflow-hidden group">
              {/* Main Cover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 z-10" />
              <img 
                src={book.image || `https://picsum.photos/400/600?random=${index}`}
                alt={book.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* 3D Book Spine */}
              <div className="absolute -left-4 top-0 bottom-0 w-4 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 rounded-l-lg transform -skew-y-2" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />
              
              {/* Book Pages Effect */}
              <div className="absolute -right-2 top-4 bottom-4 w-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-r-lg opacity-70" />
              <div className="absolute -right-3 top-6 bottom-6 w-1 bg-gray-600 rounded-r-lg opacity-50" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 z-20"
              >
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-xs font-bold text-white">FEATURED</span>
                </div>
              </motion.div>
              
              {/* Read Now Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center gap-2 shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  Read Preview
                </motion.button>
              </motion.div>
            </div>
            
            {/* Floating Rating */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-3 right-6 z-20"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(book.rating || 4.5) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-700 text-gray-600'}`} />
                  ))}
                  <span className="text-sm font-bold text-white ml-1">{book.rating || 4.5}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Book Info */}
          <div className="relative z-10">
            {/* Title & Author */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{book.title || "Cosmic Odyssey"}</h3>
              <p className="text-gray-400 text-sm">by <span className="text-cyan-300 font-medium">{book.author || "Unknown Author"}</span></p>
            </div>

            {/* Category & Stats */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-500/30">
                <Zap className="w-3 h-3 text-purple-300" />
                <span className="text-xs text-purple-200">{book.category || "Science Fiction"}</span>
              </div>
              
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30">
                <Clock className="w-3 h-3 text-cyan-300" />
                <span className="text-xs text-cyan-200">420 pages</span>
              </div>
              
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/10 border border-pink-500/30">
                <Users className="w-3 h-3 text-pink-300" />
                <span className="text-xs text-pink-200">1.2k reads</span>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
              className="overflow-hidden mb-4"
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                {book.description || "A breathtaking journey through quantum realms and cosmic anomalies. This interstellar adventure explores the boundaries of reality itself."}
              </p>
            </motion.div>

            {/* Price & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  ${book.price || 24.99}
                </div>
                <div className="text-xs text-gray-500">or 5.99/month</div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/30 transition-all"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/30 transition-all"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-cyan-500 text-cyan-500' : 'text-gray-400'}`} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-500/20 border border-gray-700 hover:border-purple-500/30 transition-all"
                >
                  <Share2 className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

        {/* View Details Button */}
        <div className="p-4 pt-0">
          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDetails(!showDetails)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/30 text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </motion.button>
        </div>

        {/* Quick Stats Bar */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-20 left-4 right-4 z-20"
            >
              <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-cyan-300">85%</div>
                    <div className="text-xs text-gray-400">Completion</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-300">240</div>
                    <div className="text-xs text-gray-400">Reviews</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-300">4.8★</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hover Beam Effect */}
      {isHovered && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
      )}
    </motion.div>
  )
}