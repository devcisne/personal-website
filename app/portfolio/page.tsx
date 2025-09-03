// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration",
    image:
      "https://via.placeholder.com/350x200/00A8E8/FFFFFF?text=E-commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for team collaboration and task tracking",
    image:
      "https://via.placeholder.com/350x200/007EA7/FFFFFF?text=Task+Manager",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather information with forecasting capabilities",
    image:
      "https://via.placeholder.com/350x200/003459/FFFFFF?text=Weather+Dashboard",
    technologies: ["React", "API Integration", "Chart.js"],
    link: "#",
  },
  {
    id: 4,
    title: "Blog CMS",
    description:
      "Content management system for creating and managing blog posts",
    image: "https://via.placeholder.com/350x200/4088b8/FFFFFF?text=Blog+CMS",
    technologies: ["React", "Express", "PostgreSQL"],
    link: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-[85vh] bg-white dark:bg-black">
      <div className="container py-10 px-4">
        <h1 className="text-3xl font-semibold text-[#007EA7] mb-8">
          Portfolio
        </h1>
        <div className="flex flex-wrap justify-center w-full gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#00A8E8] text-white text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#007EA7] rounded-lg hover:bg-[#00A8E8] focus:ring-4 focus:outline-none focus:ring-[#00A8E8]"
                >
                  View Project
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
