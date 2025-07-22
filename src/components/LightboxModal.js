import React from 'react';

// --- Icono para cerrar el lightbox ---
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function LightboxModal({ mediaItem, onClose }) {
  if (!mediaItem) return null;

  return (
    // Contenedor principal que cubre toda la pantalla
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Botón de cierre en la esquina superior derecha */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-pink-500 transition-colors duration-300"
        aria-label="Close lightbox"
      >
        <CloseIcon />
      </button>

      {/* Contenedor del contenido para evitar que el clic en la imagen cierre el modal */}
      <div className="relative max-w-screen-lg w-full max-h-screen-lg h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        
        {/* Renderiza una imagen si el tipo es 'image' */}
        {mediaItem.type === 'image' && (
          <img src={mediaItem.src} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        )}

        {/* Renderiza un iframe de YouTube si el tipo es 'youtube' */}
        {mediaItem.type === 'youtube' && (
          <div className="aspect-video w-[90vw] max-w-screen-lg">
            <iframe
              className="w-full h-full rounded-lg"
              src={mediaItem.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Renderiza un video HTML5 si el tipo es 'video' (para Cloudinary) */}
        {mediaItem.type === 'video' && (
          <video
            className="max-w-full max-h-[90vh] rounded-lg"
            src={mediaItem.src}
            controls
            autoPlay
            loop
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default LightboxModal;