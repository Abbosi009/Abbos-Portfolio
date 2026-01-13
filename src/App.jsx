import React, { useEffect, useState } from 'react'

const socials = [
  {name:'GitHub', href:'https://github.com/Abbosi009', color:'text-purple-500', title:'Abbosi009', svg: (<svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.2-1.5 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.37.8 1.1.8 2.22 0 1.6-.01 2.88-.01 3.28 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>)},
  {name:'LinkedIn', href:'https://www.linkedin.com/in/abbos-ismoilov-27a7bb362/', color:'text-blue-600', title:'abbos-ismoilov-27a7bb362', svg:(<svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M4.98 3.5a2.88 2.88 0 1 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM3 9h4v12H3zM9 9h3.83v1.63h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21H18v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V21H9V9z"/></svg>)} ,
  {name:'Email', href:'mailto:abbosixan@gmail.com', color:'text-red-500', title:'abbosixan@gmail.com', svg:(<svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M2 6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5L12 12 2 6.5zM12 10L2 4h20L12 10z"/></svg>)}
]

const skillsData = [
  {cat:'Frontend', items:[
    ['HTML5',90],['CSS3',85],['JavaScript',88],['React',85],['TypeScript',80],['Tailwind CSS',90]
  ]},
  {cat:'Tools & Others', items:[
    ['Git & GitHub',85],['Responsive Design',90],['REST APIs',80],['Vite',85],['npm/yarn',85],['VS Code',90]
  ]}
]

const projects = [
  {title:'E-Commerce Platform', desc:'E-commerce site (cart, filtering, responsive)', tech:['React','TypeScript','Tailwind','Redux'], img:'data:image/jpeg;base64,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'},
  {title:'Task Management App', desc:"Task management (drag-and-drop, local storage)", tech:['React','JavaScript','CSS3','LocalStorage'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63h8-vMqCuNPYu-z9tcDH4c2FEjwK7mH53g&s'},
  {title:'Weather Dashboard', desc:'Weather app (location search, forecast)', tech:['React','API','Tailwind'], img:'data:image/jpeg;base64,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... (truncated for brevity)'} ,
  {title:'Portfolio Website', desc:'Portfolio site (animations, modern design)', tech:['React','Tailwind','Motion'], img:'data:image/jpeg;base64,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'}
]

export default function App(){
  const [isLight,setIsLight] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false)
  const [rotate,setRotate] = useState(false)

  useEffect(()=>{
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('site-theme')
    if(stored) setIsLight(stored==='light')
    else setIsLight(!prefersDark) // if system dark, site dark
  },[])

  useEffect(()=>{
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('site-theme', isLight? 'light':'dark')
  },[isLight])

  useEffect(()=>{
    // animate skills bars after mount
    const timers = []
    timers.push(setTimeout(()=>{
      const bars = document.querySelectorAll('[data-skill]')
      bars.forEach(b=>{
        const v = b.getAttribute('data-skill')
        b.style.width = v + '%'
      })
    },300))
    return ()=>timers.forEach(clearTimeout)
  },[]) 

  function scrollToId(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    setMenuOpen(false)
  }

  function handleThemeToggle(){
    setRotate(true)
    setIsLight(s=>!s)
    setTimeout(()=>setRotate(false),500)
  }

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/6 header-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center text-white">&lt;/&gt;</div>
            <div className="font-semibold">Abbos Ismoilov</div>
          </div>

          <nav className="hidden md:flex gap-6">
            <button onClick={()=>scrollToId('about')} className="text-sm text-muted">About</button>
            <button onClick={()=>scrollToId('skills')} className="text-sm text-muted">Skills</button>
            <button onClick={()=>scrollToId('projects')} className="text-sm text-muted">Projects</button>
            <button onClick={()=>scrollToId('contact')} className="text-sm text-muted">Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Toggle theme" onClick={handleThemeToggle} className={`p-2 rounded-md theme-btn focus-ring ${rotate? 'rotate':''}`}>
              <span className={`${!isLight? 'text-yellow-400':'text-blue-400'} inline-block`} style={{transition:'color 300ms'}}>{!isLight? '🌞':'🌙'}</span>
            </button>

            <button className="md:hidden p-2" aria-label="Open menu" onClick={()=>setMenuOpen(s=>!s)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/5 backdrop-blur-sm border-t border-white/6">
            <div className="flex flex-col gap-2 p-4">
              <button onClick={()=>scrollToId('about')} className="text-left">About</button>
              <button onClick={()=>scrollToId('skills')} className="text-left">Skills</button>
              <button onClick={()=>scrollToId('projects')} className="text-left">Projects</button>
              <button onClick={()=>scrollToId('contact')} className="text-left">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-28 pb-12 space-y-8">
        {/* HERO */}
        <section id="hero" className="grid md:grid-cols-2 items-center gap-6">
          <div>
            <div className="w-28 h-28 rounded-full avatar-gradient flex items-center justify-center text-white text-2xl font-bold">AI</div>
            <h1 className="mt-4 text-3xl font-bold">Hi, I'm <span className="text-primary">Abbos Ismoilov</span></h1>
            <h3 className="text-muted mt-1">Frontend Developer</h3>
            <p className="mt-3 text-muted">I'm a passionate frontend developer studying at Najot Ta'lim. I build responsive, accessible and animated web interfaces.</p>

            <div className="flex items-center gap-3 mt-4">
              {socials.map(s=> (
                <a key={s.name} href={s.href} title={s.title} target="_blank" rel="noreferrer" className={`icon-hover p-2 rounded-md ${s.color} hover:scale-110 transition-transform`} aria-label={s.name}>
                  {s.svg}
                </a>
              ))}
            </div>

            <div className="mt-6 flex gap-3 flex-col sm:flex-row">
              <button onClick={()=>scrollToId('projects')} className="px-4 py-2 rounded-md bg-primary text-white btn-send">View My Work</button>
              <button onClick={()=>scrollToId('contact')} className="px-4 py-2 rounded-md border border-white/6 btn-send">Get In Touch</button>
            </div>
          </div>

          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60" alt="workspace" className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="p-6 rounded-lg md:grid md:grid-cols-2 gap-6 items-center glass">
          <div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60" alt="coding workspace" className="rounded-lg shadow" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold section-title">About Me</h2>
            <p className="mt-3">I am studying Frontend Development at Najot Ta'lim. I work on practical web development projects, building responsive and accessible user interfaces.</p>
            <p className="mt-2">During my web development journey, I have learned to work with React and modern CSS libraries, creating interactive and maintainable applications.</p>
            <p className="mt-2">Interests: UI/UX design, performance optimization, and contributing to the developer community.</p>

            <div className="mt-4 inline-block px-3 py-2 bg-white/10 rounded">Najot Ta'lim — Frontend Development</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="p-6 rounded-lg bg-card">
          <h2 className="text-2xl font-semibold section-title">Skills</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {skillsData.map(group=> (
              <div key={group.cat}>
                <h3 className="font-medium mb-3">{group.cat}</h3>
                <div className="space-y-3">
                  {group.items.map(([name,val])=> (
                    <div key={name} className="">
                      <div className="flex justify-between text-sm mb-1"><div>{name}</div><div>{val}%</div></div>
                      <div className="w-full h-3 bg-white/10 rounded overflow-hidden">
                        <div data-skill={val} className="h-3 bg-primary rounded progress-bar" style={{width:0}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="p-6 rounded-lg bg-secondary/30">
          <h2 className="text-2xl font-semibold section-title">Projects</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {projects.map(p=> (
              <div key={p.title} className="project-card bg-white/5 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden rounded">
                  <img className="project-img w-full h-40 object-cover rounded" src={p.img} alt={p.title} />
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="text-sm mt-1 text-muted">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map(t=> <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-full">{t}</span>)}
                </div>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="px-3 py-1 rounded bg-purple-600 text-white transform hover:scale-110 transition-transform">Code</a>
                  <a href="#" className="px-3 py-1 rounded bg-green-600 text-white transform hover:scale-110 transition-transform">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="p-6 rounded-lg bg-card">
          <h2 className="text-2xl font-semibold section-title">Contact</h2>
          <div className="mt-4 grid md:grid-cols-4 gap-4">
            <a href="mailto:abbosixan@gmail.com" className="glass p-4 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform" aria-label="Email"> 
              <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5L12 12 2 6.5zM12 10L2 4h20L12 10z"/></svg>
              <div className="text-sm">Email</div>
            </a>

            <a href="https://t.me/Ismoilov_dev" className="glass p-4 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform telegram-hover" aria-label="Telegram">
              <svg className="w-6 h-6 text-sky-400 telegram-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 3L2 10.5l5.5 1.9L10 21l3-3 5 3 3-17z"/></svg>
              <div className="text-sm">Telegram</div>
            </a>

            <a href="https://github.com/Abbosi009" className="glass p-4 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform" aria-label="GitHub">
              <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.2-1.5 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.37.8 1.1.8 2.22 0 1.6-.01 2.88-.01 3.28 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              <div className="text-sm">GitHub</div>
            </a>

            <a href="https://www.linkedin.com/in/abbos-ismoilov-27a7bb362/" className="glass p-4 rounded-lg flex flex-col items-center gap-2 hover:scale-110 transition-transform" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.88 2.88 0 1 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM3 9h4v12H3zM9 9h3.83v1.63h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21H18v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.82V21H9V9z"/></svg>
              <div className="text-sm">LinkedIn</div>
            </a>
          </div>

            <form className="mt-6 grid md:grid-cols-4 gap-4 glass p-4 rounded-lg">
            <input className="col-span-2 p-3 rounded focus-ring bg-transparent border border-white/8" placeholder="Name" aria-label="Name" />
            <input className="col-span-2 p-3 rounded focus-ring bg-transparent border border-white/8" placeholder="Email" aria-label="Email" />
            <textarea className="md:col-span-4 p-3 rounded focus-ring bg-transparent border border-white/8" rows="6" placeholder="Message" aria-label="Message"></textarea>
            <button className="md:col-span-4 px-4 py-3 bg-primary rounded text-white hover:scale-105 active:scale-95 shadow-lg transform transition-transform">Send Message</button>
          </form>
        </section>

        <footer className="border-t border-white/6 pt-4 text-center">
          <div>© {new Date().getFullYear()} Abbos Ismoilov. Built with React & Tailwind CSS</div>
        </footer>
      </main>
    </div>
  )
}
