import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our cosmic services? Reach out to our interstellar support team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Mail />,
                    title: "Email",
                    info: "support@cosmicbooks.com",
                    desc: "We'll respond within 24 hours"
                  },
                  {
                    icon: <Phone />,
                    title: "Phone",
                    info: "+1 (555) 123-4567",
                    desc: "Mon-Fri from 9am to 6pm"
                  },
                  {
                    icon: <MapPin />,
                    title: "Office",
                    info: "Orion Arm, Milky Way Galaxy",
                    desc: "Located near the cosmic center"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <div className="text-cyan-300">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-cyan-300 mb-1">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                <MessageSquare className="w-8 h-8 text-cyan-300 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Live Chat Support</h4>
                <p className="text-gray-400 mb-4">Available 24/7 for immediate assistance</p>
                <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
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

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-2">
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

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Cosmic Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}