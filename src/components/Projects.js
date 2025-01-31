import React from 'react';
import { useNavigate} from 'react-router-dom';  // Import the useHistory hook for navigation

const projectsData = [
  {
    title: "Project 1",
    description: "This is an amazing project that showcases my web development skills.",
    link: "git remote add origin https://github.com/Dominic649/ludo.git",
  },
  {
    title: "Project 2",
    description: "A creative design project with a stunning user interface.",
    link: "git remote add origin https://github.com/Dominic649/my-profile.git",
  },
  {
    title: "Project 3",
    description: "A full-stack web application with powerful backend integration.",
    link: "git remote add origin https://github.com/Dominic649/doc-1.git",
  },
  // Add more projects as necessary
];

const NotAvailable = () => {
  const history = useNavigate();

  const goBackHome = () => {
    history.push('/'); // Navigate back to the homepage
  };

  const refreshPage = () => {
    window.location.reload(); // Refresh the current page
  };

  return (
    <div className="not-available-container">
      <h1>Oops! Our page is not available right now.</h1>
      <p>Sorry, something went wrong. Please try again later.</p>
      <div className="button-container">
        <button onClick={refreshPage}>Refresh</button>
        <button onClick={goBackHome}>Go Back to Home</button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
export { NotAvailable };  // Export the NotAvailable component
