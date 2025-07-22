import React, { useState, useEffect } from 'react';
import LightboxModal from './LightboxModal'; 

// --- Iconos ---
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);
const ZoomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
);

function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxMedia, setLightboxMedia] = useState(null);

  useEffect(() => {
    if (project) {
      setCurrentIndex(0);
    }
  }, [project]);

  if (!project) return null;

  const media = project.media && project.media.length > 0 
    ? project.media 
    : [{ type: 'image', src: project.imageUrl }];

  const prevSlide = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const handleOpenLightbox = () => setLightboxMedia(media[currentIndex]);
  const handleCloseLightbox = () => setLightboxMedia(null);
  const handleModalContentClick = (e) => e.stopPropagation();

  const currentMedia = media[currentIndex];

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
        onClick={onClose}
      >
        <div
          className="bg-surface rounded-lg shadow-2xl shadow-primary/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col animate-scale-in"
          onClick={handleModalContentClick}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-secondary hover:text-text-main bg-background/50 rounded-full p-2 transition-all duration-300 z-30 transform hover:scale-110"
            aria-label="Cerrar modal"
          >
            <CloseIcon />
          </button>
          
          <div 
            className="w-full h-64 md:h-96 bg-background relative group rounded-t-lg overflow-hidden cursor-pointer"
            onClick={handleOpenLightbox}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <ZoomIcon />
            </div>

            {currentMedia.type === 'image' && (
              <img className="w-full h-full object-contain" src={currentMedia.src} alt={`${project.title} slide ${currentIndex + 1}`} />
            )}
            {currentMedia.type === 'youtube' && (
              <div className="w-full h-full pointer-events-none">
                <iframe className="w-full h-full" src={currentMedia.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            )}
            {currentMedia.type === 'video' && (
              <video className="w-full h-full object-contain" src={currentMedia.src} muted loop autoPlay playsInline>
                Your browser does not support the video tag.
              </video>
            )}

            {media.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition-all duration-300 z-20 transform hover:scale-110">
                  <ChevronLeftIcon />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition-all duration-300 z-20 transform hover:scale-110">
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </div>

          <div className="p-6 md:p-8 flex-grow">
            <h2 className="text-3xl font-bold text-text-main mb-2">{project.title}</h2>
            <p className="text-primary font-semibold mb-6">{project.year}</p>
            
            <div 
              className="text-text-light mb-8 prose prose-invert max-w-none prose-p:my-3 prose-ul:list-disc prose-ul:ml-5 prose-strong:text-primary"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <div className="border-t border-secondary/20 pt-6">
              <h4 className="text-lg font-semibold text-text-main mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-background text-secondary text-sm font-medium px-4 py-2 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LightboxModal 
        mediaItem={lightboxMedia}
        onClose={handleCloseLightbox}
      />
    </>
  );
}

export default ProjectModal;