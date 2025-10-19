/*
  Portfolio.jsx
  A single-file React component (default export) for a dark, aesthetic portfolio site.

  Instructions:
  - This uses Tailwind CSS, framer-motion, and lucide-react icons.
  - To run quickly:
      1. Create a React app (Vite or Create React App) or Next.js project.
      2. Install dependencies: `npm i framer-motion lucide-react`
      3. Set up Tailwind CSS (https://tailwindcss.com/docs/guides/vite or CRA)
      4. Paste this file into `src/components/Portfolio.jsx` and import it in your App.
  - Replace `PERSON`, `BIO`, and the `projects` array with your own info and GitHub repo links.
*/

import React from 'react';
import { Github, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Awesome App',
    desc: 'A short one-line description of the project that highlights what it does.',
    tags: ['React', 'Node', 'API'],
    repo: 'https://github.com/your-username/awesome-app',
    demo: '',
  },
  {
    id: 2,
    title: 'Design System',
    desc: 'Reusable UI components and design tokens for scalable apps.',
    tags: ['Design', 'CSS', 'Tailwind'],
    repo: 'https://github.com/your-username/design-system',
    demo: '',
  },
  {
    id: 3,
    title: 'ML Prototype',
    desc: 'Experimental project demonstrating a lightweight ML pipeline.',
    tags: ['Python', 'ML'],
    repo: 'https://github.com/your-username/ml-prototype',
    demo: '',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-neutral-900 to-black text-gray-200 antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center text-black font-bold shadow-lg">PA</div>
          <div>
            <h1 className="text-xl font-semibold">Shozab Abbas</h1>
            <p className="text-xs text-gray-400">Software developer • Open-source enthusiast</p>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition flex items-center gap-2"><Mail size={14} />Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">Shozab</span>.
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl">I build fast, accessible, and beautiful web experiences. I love open-source, learning new things, and shipping polished projects.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-gray-800/60 hover:bg-gray-800 transition shadow-sm">
                View projects
n              </a>
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 border border-gray-700 hover:bg-gray-800 transition">
                Say hello
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-400">
              <div className="px-3 py-1 rounded-full bg-gray-800/40">Available for work</div>
              <div className="px-3 py-1 rounded-full bg-gray-800/40">Open to collaboration</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/5 shadow-2xl">
            <div className="w-full aspect-video rounded-xl bg-gradient-to-tr from-indigo-700 to-pink-600 flex items-center justify-center text-3xl font-bold text-white/90">Hero</div>
            <p className="mt-4 text-sm text-gray-300">A compact hero card — replace this with an illustration or screenshot of your best work.</p>
          </motion.div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="mt-2 text-gray-400 max-w-2xl">Selected projects with links to the source repositories. Click the GitHub icon to open the repo.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article key={p.id} whileHover={{ translateY: -6 }} className="rounded-xl overflow-hidden bg-gradient-to-br from-white/3 to-transparent border border-white/5 shadow-md">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                      <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`} className="p-2 rounded-md hover:bg-white/5 transition">
                        <Github size={18} />
                      </a>
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 transition">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800/40 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="h-36 bg-gradient-to-tr from-indigo-600/30 to-pink-500/20 flex items-end p-4">
                  <div className="text-xs text-gray-200/80">Click the GitHub icon to view source</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">I’m a builder focused on craft and performance. I enjoy creating small, well-crafted apps and contributing to open source. I care about accessibility, developer experience, and clean design. When I’m not coding I read, sketch UI concepts, and learn about compilers.</p>

            <h4 className="mt-6 text-lg font-semibold">Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'C++', 'Tailwind', 'Node.js', 'Python'].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-gray-800/40 text-sm">{s}</span>
              ))}
            </div>
          </div>

          <aside className="p-4 rounded-xl bg-gradient-to-br from-white/3 to-transparent border border-white/5">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-gray-300">Have a project or a job opening? I’m open — email me or find my GitHub.</p>

            <div className="mt-4 flex gap-3">
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800/60 hover:bg-gray-800" href="mailto:your.email@example.com">
                <Mail size={14} /> Email
              </a>
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800/60 hover:bg-gray-800" href="https://github.com/your-username" target="_blank" rel="noreferrer">
                <Github size={14} /> GitHub
              </a>
            </div>
          </aside>
        </section>

        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-gray-400">Prefer email? Use the link below or copy my address.</p>

          <div className="mt-4 flex items-center gap-4">
            <div className="px-4 py-3 bg-gray-800/40 rounded-md select-all">your.email@example.com</div>
            <a href="mailto:your.email@example.com" className="px-4 py-3 rounded-md bg-indigo-600 hover:brightness-95 transition">Email me</a>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 mt-20 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Shozab Abbas. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="hover:text-white transition"><Github size={16} /></a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
