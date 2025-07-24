import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import portStyle from './Portfolio.module.css'
import homeImg from '../../assets/poert1.png'
import tartImg from '../../assets/port2.png'
import tentImg from '../../assets/port3.png'
export default function Portfolio() {
  return <>
  <div className={`${portStyle.icon} `}>
  <h1 className={`${portStyle.colorH1}fw-bolder my-2`}>PORTFOLIO COMPONENT</h1>
  <h2 className='fs-6 mt-2'><FontAwesomeIcon icon={faStar} /></h2>
  </div>
<div className="container">
  <div className="row g-4 mb-3 p-2">
    <div className="col-lg-4">
      <div className={portStyle.containerImg}>
        <img src={homeImg} alt="home" className='w-100 rounded-2'/>
        <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className={portStyle.containerImg}>
        <img src={tartImg} alt="tart" className='w-100 rounded-2' />
      <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className={portStyle.containerImg}>
        <img src={tentImg} alt="tent" className='w-100 rounded-2'/>
      <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
        <div className="col-lg-4">
   <div className={portStyle.containerImg}>
        <img src={homeImg} alt="home" className='w-100 rounded-2'/>
        <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
       <div className={portStyle.containerImg}>
        <img src={tartImg} alt="tart" className='w-100 rounded-2' />
      <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
    <div className={portStyle.containerImg}>
        <img src={tentImg} alt="tent" className='w-100 rounded-2'/>
      <div class={`${portStyle.containerICon} rounded-2 d-flex justify-content-center align-items-center`}>
          <h2 className='display-1 fw-bold text-light'><FontAwesomeIcon icon={faPlus} /></h2>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
}
