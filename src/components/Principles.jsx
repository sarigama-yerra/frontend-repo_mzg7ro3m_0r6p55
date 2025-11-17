import { motion } from 'framer-motion'

const principles = [
  { title: 'Standards Over Feelings', desc: 'Operate on commitments, not moods. Your floor becomes your new average.' },
  { title: 'Default to Structure', desc: 'Calendars, checklists, and constraints that remove decision fatigue.' },
  { title: 'Compound Discipline', desc: 'Small non-negotiables executed daily beat sporadic intensity.' },
]

export default function Principles() {
  return (
    <section id="principles" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          The Discipline Framework
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-neutral-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
