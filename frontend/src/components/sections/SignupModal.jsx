import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Mail, Lock, User, Sparkles } from 'lucide-react'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export default function SignupModal({ onClose, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    
    try {
      setLoading(true)
      await signup(formData)
      onClose()
    } catch (err) {
      setError(err.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md"
      >
        <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
          
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>
          
          {/* Header */}
          <div className="relative p-8 border-b border-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Join Cosmic Books
                </h2>
                <p className="text-gray-400 mt-2">Create your interstellar account</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all"
                placeholder="Create a password"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" id="terms" required className="rounded" />
              <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Create Cosmic Account
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </span>
            </motion.button>
            
            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}