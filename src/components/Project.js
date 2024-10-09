import React from 'react'

const Project = ({title, description, technologies, link}) => {
  return (
    <div className='project'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong> Technologies Used:</strong> {technologies}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  )
}

export default Project