import { motion } from 'framer-motion'

const products = [
  {
    name: 'Protocol OS',
    desc: 'Your personal operating system: routines, trackers, and reviews.',
    badge: 'Best Seller'
  },
  {
    name: 'Discipline Sprint',
    desc: 'A 28-day protocol to hardwire standards and non-negotiables.',
    badge: 'New'
  },
  {
    name: 'Deep Work Blocks',
    desc: 'A modular system to eliminate distractions and increase throughput.',
    badge: 'Pro'
  }
]

export default function Products() {
  return (
    <section id="products" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Digital Products
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-xs uppercase tracking-wide rounded-full border border-white/20 px-2 py-1 text-neutral-300">{p.badge}</span>
              </div>
              <p className="mt-3 text-neutral-300">{p.desc}</p>
              <div className="mt-4">
                <a href="#cta" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200">Learn More</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
