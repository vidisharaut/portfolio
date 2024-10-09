import React from 'react'
import Project from '../components/Project'

const Projects = () => {
  const projects = [
    {
      title: 'Python Virtual Assistant',
      description: ' A Python-based desktop virtual assistant with voice recognition and task automation capabilities. It performs tasks such as web browsing, media control, system management, NotePad Automation, Paint Automation, etc. through simple voice commands.',
      technologies: 'Python, pyttsx3, Speech Recognition, Tkinter',
      link: 'https://github.com/vidisharaut/AVY-Virtual-Assistant',
    },
    {
      title: 'Expense Tracker App',
      description: 'A simple yet efficient expense tracking application developed using React.js. The app allows users to add, edit, and delete expenses, providing a clear overview of personal spending with real-time updates to the displayed data.',
      technologies: 'React, JavaScript, CSS',
      link: 'https://vidisharaut.github.io/expense-tracker/',
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application built with React.js that provides real-time weather updates based on the user’s location. The app fetches data from a weather API and displays temperature, date, city, and weather conditions in a user-friendly interface.',
      technologies: 'React, JavaScript, CSS',
      link: 'https://vidisharaut.github.io/weather-app/',
    },
    // Add more projects here
  ];
  return (
    <>
    <h2 className='project-heading'>Projects</h2>
    <div className='projects'>
    {projects.map((project, index) =>(
      <Project
      key={index}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      link={project.link}/>
    ))}  
    </div>

    </>
    
   
  )
}

export default Projects