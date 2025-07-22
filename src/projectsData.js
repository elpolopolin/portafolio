export const projectsData = [
  {
    id: 1,
    title: "Eventop - Event Management",
    year: 2023,
    introduction: "A web application developed for comprehensive event management.",
    // Imagen en miniatura para la tarjeta (puede ser del video)
    imageUrl: "https://i.ytimg.com/vi/gOWlUugPhOk/maxresdefault.jpg", 
    media: [
      { type: 'video', src: 'https://res.cloudinary.com/du8qatyzh/video/upload/eventop_urbhtl.mp4' },
      { type: 'image', src: 'https://placehold.co/1280x720/1a1a1a/ff69b4?text=Eventop+Screenshot+1' },
      { type: 'image', src: 'https://placehold.co/1280x720/1a1a1a/ff69b4?text=Eventop+Screenshot+2' }
    ],
    description: `
      Eventop is a web application developed for event management, allowing users to register, browse available events, reserve their attendance, and manage their personal activities. It is designed for both event organizers and attendees, featuring a simple and intuitive control panel. <br/><br/>
      <strong>Key features:</strong>
      <ul>
        <li>User registration and login with validation</li>
        <li>Admin panel to create, edit, and delete events</li>
        <li>User event registration with capacity control</li>
        <li>Event filtering and search by date, name, or category</li>
        <li>Fully responsive design for all devices</li>
      </ul>
    `,
    technologies: ["React", "Node.js", "Express", "Microsoft SQL Server", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Tennis Academy Back-Office",
    year: 2024,
    introduction: "Internal web system for managing a tennis academy's operations.",
    imageUrl: "https://res.cloudinary.com/du8qatyzh/image/upload/v1753149479/asdasdasd2_wjilga.png",
    media: [
        { type: 'video', src: 'https://res.cloudinary.com/du8qatyzh/video/upload/v1753148781/Tennis_Academy_Back-Office._si8nbw.mp4' },
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753150085/2sd_wsuzer.png' },
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753150085/aw_isb1v7.png' },
         { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753150084/w42_aydrrh.png' }
    ],
    description: `
      An internal web system for the administration of a tennis academy, with functionalities to manage students, classes, schedules, and payments. Developed with a focus on ease of use and efficiency for administrative staff.<br/><br/>
      <strong>Highlighted Features:</strong>
      <ul>
        <li>Student registration and profile editing</li>
        <li>Class assignment by day and time</li>
        <li>Payment management and account status</li>
        <li>Admin dashboard with access control</li>
        <li>Intuitive and responsive interface</li>
      </ul>
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT"]
  },
  {
    id: 3,
    title: "INTESTINO - Blog & Back-Office",
    year: 2025,
    introduction: "A blog platform for publishing articles on politics and philosophy.",
    imageUrl: "https://res.cloudinary.com/du8qatyzh/image/upload/v1753148224/intestino_ymykhq.jpg",
     media: [
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753148224/intestino_ymykhq.jpg' },
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753148220/intestino12_r8b5rw.jpg' },
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753148231/sfdk_qwqyke.jpg' },
        { type: 'image', src: 'https://res.cloudinary.com/du8qatyzh/image/upload/v1753148238/intestinoBack_vdqkvq.jpg' } 
    ],
    description: `
      A blog-style web platform for publishing opinion and analysis articles on politics, philosophy, and social issues. It includes an administration system (back-office) to create, edit, and delete articles, manage authors, and moderate content.<br/><br/>
      <strong>Key Functionalities:</strong>
      <ul>
        <li>Public view of articles with a clean, responsive design</li>
        <li>Administrator panel protected by login</li>
        <li>CRUD operations for articles and author management</li>
        <li>Organization of articles by categories or tags</li>
        <li>Search engine by title or content</li>
      </ul>
    `,
    technologies: ["Next.js", "Node.js", "Express.js", "EJS", "JWT"]
  }
];
