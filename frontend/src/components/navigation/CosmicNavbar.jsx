import { motion } from 'framer-motion'
import { BookOpen, Home, Info, Mail, PlusCircle, Sparkles } from 'lucide-react'

export default function CosmicNavbar() {
  const menuItems = [
    { icon: <Home />, label: 'Home', color: 'from-cyan-400 to-blue-500' },
    { icon: <BookOpen />, label: 'Library', color: 'from-purple-400 to-pink-500' },
    { icon: <PlusCircle />, label: 'Add Book', color: 'from-emerald-400 to-green-500' },
    { icon: <Info />, label: 'About', color: 'from-orange-400 to-red-500' },
    { icon: <Sparkles />, label: 'Services', color: 'from-yellow-400 to-orange-500' },
    { icon: <Mail />, label: 'Contact', color: 'from-violet-400 to-purple-500' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo with cosmic effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl rotate-45 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white -rotate-45" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cosmic Books
              </h1>
              <p className="text-xs text-gray-400 tracking-widest">INTERSTELLAR LIBRARY</p>
            </div>
          </motion.div>

          {/* Animated Menu Items */}
          <div className="hidden md:flex items-center gap-1 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-3 rounded-xl group transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="flex items-center gap-2">
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                {/* Hover beam effect */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-16 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* User Profile with Hologram Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>
            {/* Holographic Ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}