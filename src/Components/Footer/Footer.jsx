import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import footerStyle from './footer.module.css'
export default function Footer() {
  return <>
  <div className="container-fluid text-light p-0">
    <div className={`${footerStyle.footer} row `}>
      <div className="col-4 p-5">
        <div>
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p className='fw-medium'>Clark, MO 65243</p>
        </div>
      </div>
           <div className="col-4">
        <div className={` ${footerStyle.sec2} p-5 d-flex justify-content-center align-items-center`}>
          <h3>AROUND THE WEB</h3>
          <ul className='d-flex justify-content-center '>
            <li className='mx-1 my-2 fs-5 text-light border border-1 border-light rounded-circle py-1 px-2 '>  <FontAwesomeIcon icon={faTwitter} /></li>
            <li className='mx-1 my-2 fs-5 text-light border border-1 border-light rounded-circle py-1 px-2 '>  <FontAwesomeIcon icon={faFacebook} /></li>
            <li className='mx-1 my-2 fs-5 text-light border border-1 border-light rounded-circle py-1 px-2 '>  <FontAwesomeIcon icon={faLinkedin} /></li>
            <li className='mx-1 my-2 fs-5 text-light border border-1 border-light rounded-circle py-1 px-2 '>  <FontAwesomeIcon icon={faGlobe} /></li>
          </ul>
        </div>
      </div>
           <div className="col-4 d-flex align-items-center justify-content-center px-0">
        <div>
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme <br/> created by Route</p>
        </div>
      </div>
    </div>
   <div className={`${footerStyle.lastFooter} bg-dark py-4 `}>
    <p className=' fw-medium '>Copyright © Your Website 2021</p>
   </div>
  </div>
  </>
}
