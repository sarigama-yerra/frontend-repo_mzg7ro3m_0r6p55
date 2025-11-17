import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-12">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            Install the Discipline Protocol
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-neutral-300 max-w-2xl"
          >
            Join a focused group of builders implementing systems and standards that compound across work, fitness, and life.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" required placeholder="Enter your email" className="w-full rounded-full bg-black border border-white/20 px-5 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <button className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">Get Access</button>
          </motion.form>
          <p className="mt-3 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
