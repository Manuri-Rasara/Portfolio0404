import ChangeWord from './ChangeWord';
import './Home.css';
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='homecontent'>
        <div className='no1'>MY NAME IS</div>
        <div className='no2'>MANURI RASARA</div>
        <div className='no1'>I AM A  </div>
        <div className='no3'><ChangeWord/> </div>
     
    </div>
    
        <div className="links-grid">
      <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">Email</a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>

    </>
   
  )
}
