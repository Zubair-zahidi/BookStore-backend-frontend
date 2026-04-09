import { motion } from 'framer-motion'
import { Rocket, Globe, Users, Star } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300">OUR STORY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              About Cosmic Books
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing how readers discover and experience books across the galaxy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To create an interstellar platform where readers can discover, share, and experience books like never before. We combine cutting-edge technology with cosmic design to make reading an adventure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
                  <Globe className="w-8 h-8 text-purple-300 mb-3" />
                  <h4 className="font-bold text-white mb-1">Global Reach</h4>
                  <p className="text-sm text-gray-400">Readers across 50+ countries</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20">
                  <Users className="w-8 h-8 text-cyan-300 mb-3" />
                  <h4 className="font-bold text-white mb-1">Community</h4>
                  <p className="text-sm text-gray-400">50,000+ active readers</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: <Rocket />,
                title: "Innovative Reading",
                desc: "3D book previews and immersive reading experiences"
              },
              {
                icon: <Star />,
                title: "Quality Selection",
                desc: "Curated collection of cosmic-themed literature"
              },
              {
                icon: <Globe />,
                title: "Global Community",
                desc: "Connect with readers from across the universe"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-900/10 border border-gray-800 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                  <div className="text-cyan-300">{item.icon}</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}