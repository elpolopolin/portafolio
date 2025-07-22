import React from 'react';

function ProjectCard({ project, onCardClick, index }) {
  return (
    <div
      className="bg-surface rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-pointer group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onCardClick(project)}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            src={project.imageUrl} 
            alt={project.title} 
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x300/1F2937/EC4899?text=Image+Not+Found'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-text-main">{project.title}</h3>
            <p className="text-primary font-semibold text-sm">{project.year}</p>
        </div>
      </div>
      <div className="p-6 pt-4">
        <p className="text-text-light text-base h-20">{project.introduction}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className="bg-background text-secondary text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
