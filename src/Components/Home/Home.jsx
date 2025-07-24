import React from 'react'
import avatarImg from '../../assets/avataaars.svg'
import {Link , NavLink} from 'react'
import style from './home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return <>
  <div  className={`${style.containerOfHome} d-flex align-items-center justify-content-center `}>
<div>
  <img src={avatarImg} alt="avatar" className={style.imageHome}/>
<h1 className='text-light fw-medium'>START FRAMEWORK</h1>
<h2 className='text-light fs-5'><FontAwesomeIcon icon={faStar} /></h2>
<div>
  <p className='text-light  mt-2'>Graphic Artist - Web Designer - Illustrator</p>
</div>
</div>
  </div>


  </>
}
