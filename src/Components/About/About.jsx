import React from 'react'
import aboutStyle from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return <>
    <div  className={`${aboutStyle.aboutContainer} d-flex align-items-center justify-content-center `}>
  <div>
  <h1 className='text-light fw-bold'>ABOUT COMPONENT</h1>
  <h2 className='text-light fs-5'><FontAwesomeIcon icon={faStar} /></h2>
  <div class="d-flex container px-3">
    <p className='text-light '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>
  </div>
    </div>
  </>
}
