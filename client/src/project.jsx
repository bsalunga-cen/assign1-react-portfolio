import React from 'react';
import projectImage1 from '../src/assets/project1.png';
import projectImage2 from '../src/assets/project2.png';
import projectImage3 from '../src/assets/project3.png';

const projects = [
    {
      id: 1,
      title: 'Serenity Spa',
      image: projectImage1,
      description: 'Serenity Spa Website',
      link: 'http://studentweb.cencol.ca/bsalunga/project/project.html',
    },
    {
      id: 2,
      title: 'Drag and drop - COMP125 Javascript Assignment',
      image: projectImage2,
      description: 'Develop a drag and drop feature using JavaScript. In this task, the page must allow the user to drag and drop the draggable image element inside a container  ',
      link: 'https://link-to-project2.com',
    },
    {
      id: 3,
      title: 'Screening Eagle: Inspect',
      image: projectImage3,
      description: 'Software QA for the Inspect App and web which empower owners, inspectors & engineers to protect the structural health of assets',
      link: 'https://web.screeningeagle.com/home',
    },
  ];
  
  const Projects = () => {
    return (
      <div className="projects-section">
        <h2 className='h2-section'>Projects.</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="project-image"
                />
              </a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;