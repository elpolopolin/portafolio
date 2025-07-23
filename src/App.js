import React, { useState, useEffect } from 'react';
import { projectsData } from './projectsData'; 
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal'; 

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const LinkedinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const GithubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6" /></svg>
);
const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
);
const ArrowUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
);


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleCardClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const skills = ["React", "JavaScript (ES6+)", "Node.js", "Express", "Tailwind CSS", "HTML5 & CSS3", "Figma", "Python", "Git & GitHub", "SQL", "Firebase", "REST APIs", "CRUD operations", "Responsive design", "Authentication & Authorization"];

  //LOGICA DE PAGINACIÓN
  const PROJECTS_PER_PAGE = 3;
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="bg-background text-text-main font-sans">
      
      {/* --- HERO SECTION --- */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]"></div>
  </div>

  <div className="container relative z-10 mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 animate-fade-in-up">
      <p className="text-lg md:text-xl text-primary font-semibold mb-2">
        Hi, my name is
      </p>
      <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-background-pan bg-[length:200%_auto]">
        Tomas Polonsky
      </h1>
      <h2 className="text-3xl md:text-5xl text-text-light font-bold mb-6">
       Aspiring software developer.
      </h2>
      <p className="text-text-light mb-6 max-w-lg mx-auto md:mx-0">
        I'm a Computer Science student at the University of Buenos Aires (UBA), currently in my second year. I’m 19 years old and have experience in both web and backend development through personal projects and collaborations. I'm passionate about backend systems and always aiming to write clean, efficient, and well-structured code that powers high-quality solutions.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="#projects"
          className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
        >
          View My Work
        </a>
        <a
          href="#skills"
          className="bg-surface hover:bg-secondary/40 text-text-light font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          My Skills
        </a>
        <a
          href="#contact"
          className="bg-surface hover:bg-secondary/40 text-text-light font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Contact Me
        </a>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center animate-fade-in-up [animation-delay:0.2s]">
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <img
          src="https://res.cloudinary.com/du8qatyzh/image/upload/v1753148702/me_mxis7d.jpg"
          alt="Tomas Polonsky"
          className="relative w-full h-full object-cover rounded-full border-4 border-surface shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>


      <main className="container mx-auto px-6">
        
        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-24 md:py-32 animate-fade-in-up "> 
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4">My Tech Stack</h2>
                <p className="text-lg text-text-light">Technologies I work with to bring ideas to life.</p>
                <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-surface text-text-light font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-primary/40 hover:shadow-lg">
                        {skill}
                    </div>
                ))}
            </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24 md:py-32 animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">My Recent Work</h2>
            <p className="text-lg text-text-light">Here's a selection of projects I've worked on.</p>
            <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
          </div>
          
          {/* flechas */}
          <div className="relative ">
            {/* ANTERIOR */}
            <button
              onClick={handlePrevPage}
              className="hidden md:block absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-surface/80 hover:bg-primary text-white rounded-full p-2 transition-all duration-300 shadow-lg backdrop-blur-sm"
              aria-label="Previous projects"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* SIGUIENTE */}
            <button
              onClick={handleNextPage}
              className="hidden md:block absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-surface/80 hover:bg-primary text-white rounded-full p-2 transition-all duration-300 shadow-lg backdrop-blur-sm"
              aria-label="Next projects"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onCardClick={handleCardClick}
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER & CONTACT SECTION --- */}
      <footer id="contact" className="bg-surface/50 border-t border-surface py-24 md:py-32 animate-fade-in-up">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-text-light mb-8 max-w-2xl mx-auto">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center items-center gap-8 mb-8">
                <a href="mailto:polonskytomas@gmail.com" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <MailIcon className="w-8 h-8"/>
                </a>
                <a href="https://www.linkedin.com/in/tomaspolonsky/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <LinkedinIcon className="w-8 h-8"/>
                </a>
                <a href="https://github.com/elpolopolin" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all duration-300 transform hover:scale-125">
                    <GithubIcon className="w-8 h-8"/>
                </a>
            </div>
            <p className="text-secondary text-sm">&copy; {new Date().getFullYear()} Tomas Polonsky. All Rights Reserved.</p>
        </div>
      </footer>

      {/* --- MODAL --- */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />

       <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary hover:bg-primary-hover text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out z-50 ${
          showScrollButton? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Go to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>

    </div>
  );
}

export default App;
