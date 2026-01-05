import React,{useState} from "react"
import{Github,Mail,Linkedin,Twitter,Menu,X,Code,Brain,Database,Globe,Calendar,ExternalLink,Eye,GitBranch,Zap,Rocket,Palette,Terminal}from"lucide-react"

const CV_URL="/CV-Anish_Upreti.pdf"
const PROFILE_IMAGE="/anish.jpg"

const App=()=>{
const[isMenuOpen,setIsMenuOpen]=useState(false)
const[isDarkMode,setIsDarkMode]=useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

const projects=[
{id:1,title:"School Management System",status:"Under Development",badge:"Full Stack + UX Focus",description:"Multi-user platform for attendance, grading, and parent–teacher communication with a clean, intuitive interface for non-technical users.",technologies:["Django","React","PostgreSQL","Tailwind CSS"],githubUrl:"#",liveUrl:"#",note:"Soon to be published",image:"https://placehold.co/600x400/020617/38bdf8?text=School+Management+System"},
{id:2,title:"Hospital Management System",status:"Under Development",badge:"Full Stack + AI Plans",description:"System to manage patient records, doctor schedules and billing, designed with future AI-assisted triage and insights in mind.",technologies:["Django","REST API","PostgreSQL"],githubUrl:"#",liveUrl:"#",note:"Soon to be published",image:"https://placehold.co/600x400/020617/38bdf8?text=Hospital+Management+System"},
{id:3,title:"Surprise Incoming!!!",status:"Surprise Incoming!!!",badge:"Surprise Element",description:"Personal portfolio experience with a planned surprise feature to showcase creativity beyond a standard developer site.",technologies:["React","Tailwind CSS","Vercel"],githubUrl:"#",liveUrl:"#",note:"Surprise Element – Soon to be published",image:"https://placehold.co/600x400/020617/38bdf8?text=Surprise+Incoming!!!"}
]

const skills=[
{name:"Python",icon:Code,level:75,category:"Backend",status:"Proficient"},
{name:"Django",icon:Database,level:75,category:"Backend",status:"Proficient"},
{name:"REST APIs",icon:Database,level:75,category:"Backend",status:"Proficient"},
{name:"PostgreSQL",icon:Database,level:70,category:"Database",status:"Proficient"},
{name:"React.js",icon:Globe,level:70,category:"Frontend",status:"Proficient"},
{name:"HTML / CSS / Tailwind",icon:Palette,level:80,category:"Frontend",status:"Proficient"},
{name:"Docker",icon:Terminal,level:70,category:"DevOps",status:"Learning"},
{name:"Vercel",icon:Rocket,level:65,category:"Deployment",status:"Proficient"},
{name:"Machine Learning",icon:Brain,level:45,category:"AI / ML",status:"Learning"},
{name:"AI Integration",icon:Zap,level:60,category:"AI / ML",status:"Learning"},
{name:"Git & GitHub",icon:GitBranch,level:80,category:"Tools",status:"Proficient"}
]

const socialLinks=[
{name:"GitHub",icon:Github,url:"https://github.com/anishupr47-git"},
{name:"LinkedIn",icon:Linkedin,url:"https://linkedin.com/in/anishupreti47"},
{name:"Twitter",icon:Twitter,url:"https://twitter.com/anish47"},
{name:"Email",icon:Mail,url:"mailto:anish.upr.47@gmail.com"}
]

const SkillBar=({skill})=>{
const IconComponent=skill.icon
const isLearning=skill.status==="Learning"
return(
<div className="bg-white/5 dark:bg-slate-800/70 backdrop-blur-sm p-4 rounded-xl border border-slate-200/20 dark:border-slate-700/60 hover:border-cyan-400/60 transition-all duration-300">
<div className="flex items-center mb-3">
<div className="bg-white/70 dark:bg-slate-700/80 p-2.5 rounded-lg mr-3">
<IconComponent className="text-cyan-500" size={22}/>
</div>
<div>
<h3 className="font-semibold text-slate-800 dark:text-slate-100 text-base">{skill.name}</h3>
<div className="flex items-center mt-1 text-xs gap-2">
<span className="text-slate-500 dark:text-slate-400">{skill.category}</span>
{isLearning&&(<span className="text-[11px] bg-orange-500/15 text-orange-500 px-2 py-[2px] rounded-full border border-orange-500/30">Learning</span>)}
</div>
</div>
</div>
<div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
<div className={`${isLearning?"bg-gradient-to-r from-orange-400 to-orange-500":"bg-gradient-to-r from-cyan-500 to-blue-500"} h-2 rounded-full transition-all duration-700 ease-out`}style={{width:`${skill.level}%`}}/>
</div>
<div className="text-right mt-2"><span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span></div>
</div>
)}

const ProjectCard=({project})=>(
<div className="bg-white/5 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-200/30 dark:border-slate-700/60 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col">
<div className="relative overflow-hidden">
<img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"/>
<div className="absolute top-3 left-3 bg-slate-900/85 text-[11px] text-slate-100 px-3 py-1 rounded-full flex items-center gap-1"><Calendar size={12}/><span>{project.status}</span></div>
{project.badge&&(<div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-[11px] text-white px-3 py-1 rounded-full shadow-md">{project.badge}</div>)}
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">{project.title}</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{project.description}</p>
<p className="text-xs text-cyan-500 mb-3">{project.note||"Under development"}</p>
<div className="flex flex-wrap gap-2 mb-4">{project.technologies.map((t,i)=>(<span key={i}className="bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full text-[11px] border border-slate-200 dark:border-slate-700">{t}</span>))}</div>
<div className="mt-auto flex gap-3">
<a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center text-xs md:text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-cyan-300 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-cyan-500 transition-colors"><Github size={14}className="mr-1"/>Code (GitHub soon)</a>
<button className="flex-1 inline-flex items-center justify-center text-xs md:text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-colors"><Eye size={14}className="mr-1"/>Soon to be published</button>
</div>
</div>
</div>
)

const themeWrapperClass=isDarkMode?"bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100":"bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"

return(
<div className={`min-h-screen ${themeWrapperClass} transition-colors duration-500`}style={{fontFamily:`"Nunito","Poppins","Segoe UI","system-ui",-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica","Arial",sans-serif`}}>
<div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
<div className="-top-32 -left-24 w-80 h-80 absolute bg-cyan-400/18 rounded-full blur-3xl"/>
<div className="bottom-0 right-0 w-96 h-96 absolute bg-blue-500/15 rounded-full blur-3xl"/>
</div>

<header className="sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-800/70 backdrop-blur-xl bg-white/85 dark:bg-slate-950/85">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-md shadow-cyan-500/40"><Terminal className="text-white"size={18}/></div>
<div className="flex flex-col leading-tight">
<span className="text-[11px] tracking-[0.28em] uppercase text-slate-500 dark:text-slate-400">Portfolio</span>
<span className="text-xl font-semibold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Anish Upreti</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6">
{["about","skills","projects","contact"].map(i=>(
<a key={i}href={`#${i}`}className="relative text-[11px] tracking-[0.2em] uppercase text-slate-600 dark:text-slate-100 hover:text-cyan-400 transition-colors group">{i}<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all"/></a>
))}
<button onClick={()=>setIsDarkMode(p=>!p)}className="ml-3 text-[11px] px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-800/80">{isDarkMode?"Dark Mode":"Light Mode"}</button>
</nav>

<div className="flex items-center gap-2 md:hidden">
<button onClick={()=>setIsDarkMode(p=>!p)}className="text-[11px] px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80">{isDarkMode?"Dark":"Light"}</button>
<button onClick={()=>setIsMenuOpen(p=>!p)}className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80">{isMenuOpen?<X size={20}/>:<Menu size={20}/>}</button>
</div>
</div>

{isMenuOpen&&(
<div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
{["about","skills","projects","contact"].map(i=>(
<a key={i}href={`#${i}`}onClick={()=>setIsMenuOpen(false)}className="py-2 text-sm rounded-lg px-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">{i}</a>
))}
</div>
</div>
)}
</header>

<main className="max-w-6xl mx-auto px-4">
<section className="py-12 md:py-16 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300 mb-3 flex items-center gap-2"><span className="inline-flex h-[1px] w-10 bg-gradient-to-r from-cyan-500 to-blue-500"/>Software Engineering Student • Kathmandu, Nepal</p>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Building clean, scalable <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">full stack experiences</span> and exploring what&apos;s next with AI.</h1>
<p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 max-w-xl">I&apos;m a Software Engineering student with practical experience as a full stack developer.</p>

<div className="flex flex-wrap gap-3 mb-6">
<a href="#projects" className="inline-flex items-center text-sm px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white"><Rocket size={16}className="mr-2"/>View Projects</a>
<a href="#cv" className="inline-flex items-center text-sm px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-600"><ExternalLink size={16}className="mr-2"/>View CV</a>
</div>

<div className="flex flex-wrap items-center gap-4 mb-4">
<div className="flex flex-wrap gap-2">{socialLinks.map(s=>(
<a key={s.name}href={s.url}target="_blank"rel="noreferrer"className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"><s.icon size={16}/></a>
))}</div>
<div className="text-[11px] px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/40">Open to internships & projects</div>
</div>
</div>
</section>

<section id="cv" className="py-8">
<div className="max-w-3xl">
<h2 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2"><ExternalLink size={18}className="text-cyan-400"/>CV / Resume</h2>
<div className="bg-white/95 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="text-slate-600 dark:text-slate-200">
<p className="mb-1 font-medium">Download or view my CV as a PDF.</p>
</div>
<a href={CV_URL}target="_blank"rel="noreferrer"className="inline-flex items-center text-xs md:text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white"><ExternalLink size={14}className="mr-2"/>Open CV (PDF)</a>
</div>
</div>
</section>

<section id="skills" className="py-12">
<h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2"><Brain size={18}className="text-cyan-400"/>Skills & Tools</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{skills.map(s=><SkillBar key={s.name}skill={s}/>)}</div>
</section>

<section id="projects" className="py-12">
<h2 className="text-xl md:text-2xl font-semibold mb-5 flex items-center gap-2"><GitBranch size={18}className="text-cyan-400"/>Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{projects.map(p=><ProjectCard key={p.id}project={p}/> )}</div>
</section>
</main>

<footer className="border-t border-slate-200/60 dark:border-slate-800/70 mt-8">
<div className="max-w-6xl mx-auto px-4 py-4 text-[11px] md:text-xs flex flex-col md:flex-row items-center justify-between gap-2 text-slate-500 dark:text-slate-400">
<span>&copy; {new Date().getFullYear()} Anish Upreti.</span>
<span>Built with React & Tailwind</span>
</div>
</footer>
</div>
)}

export default App
