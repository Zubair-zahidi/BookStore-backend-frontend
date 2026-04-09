import { motion } from 'framer-motion'
import { BookOpen, Shield, Truck, Headphones, Zap, Globe } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <BookOpen />,
      title: "Digital Library",
      description: "Access thousands of e-books with our cosmic reading interface",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Shield />,
      title: "Secure Platform",
      description: "Military-grade encryption for your reading data and purchases",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Truck />,
      title: "Fast Delivery",
      description: "Physical books delivered across the galaxy in record time",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Headphones />,
      title: "24/7 Support",
      description: "Our cosmic support team is always here to help",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap />,
      title: "AI Recommendations",
      description: "Smart book suggestions based on your reading habits",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe />,
      title: "Global Community",
      description: "Connect with readers from different planets and dimensions",
      color: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative bg-gradient-to-b from-gray-950/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Cosmic Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience reading like never before with our interstellar services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur" />
                
                <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <div className="text-white text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="flex items-center text-sm text-cyan-300 font-medium">
                  <span>Learn more</span>
                  <div className="ml-2 w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}