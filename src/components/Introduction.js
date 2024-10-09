import React from 'react'
import { Link } from 'react-router-dom'

const Introduction = () => {
  return (
    <div className='intro'>
<h1>Hi, I'm Vidisha Raut.</h1>
<h2>Aspiring Software Engineer | Frontend Developer | Python Programmer</h2>
<p>I’m a final-year engineering student with hands-on experience in building responsive frontend applications and Python-based projects. Passionate about learning new technologies, problem-solving, and bringing creative solutions to life through code.</p>
<div className='btns'>
<Link to='/Projects' className="btn">View My Projects</Link>.
<a href='https://drive.google.com/file/d/1GWODRH8fNUhbKKMjnmOqE-ts5XsmCaQG/view?usp=drive_link' target="_blank" className='btn'>Resume</a>
</div>

    </div>
  )
}

export default Introduction