import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 md:pt-44 md:pb-28 grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Unshakeable Discipline
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              className="mt-5 text-neutral-200 text-lg md:text-xl max-w-xl"
            >
              Build a life that doesn’t rely on motivation. Systems, standards, and structure that compound.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors">
                Start the Discipline Protocol
              </a>
              <a href="#principles" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Explore Principles
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="mt-10 flex items-center gap-6 text-sm text-neutral-300"
            >
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs">UD</span>
                ))}
              </div>
              <p>Trusted by 10k+ disciplined builders</p>
            </motion.div>
          </div>

          <div className="md:col-span-5" />
        </div>
      </div>
    </section>
  )
}
