import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import contactStyle from './contact.module.css'
import { useFormState } from 'react-dom';
export default function Contact() {
   const [value, setValue] = useState("");
   const [Agevalue, setAgeValue] = useState("");
   const [Emailvalue, setEmailvalue] = useState("");
   const [Passvalue, setEPassvalue] = useState("");

   
  return <>
    <div className={`${contactStyle.icon} mb-5`}>
    <h1 className={`${contactStyle.colorH1}fw-bolder my-2`}>CONTACT SECTION</h1>
    <h2 className='fs-6 mt-2'><FontAwesomeIcon icon={faStar} /></h2>
    </div>
    <div className='mb-4'>
      <form >
  <div>
   {value != '' && <label className={`${contactStyle.labelOfUsername}`}>username</label>}
      <input id="username" className='d-block mx-auto border border-start-0 border-top-0 border-end-0 rounded-2 w-50 px-3 mb-5 mt-2' type="text" name='username' placeholder='userName'
         value={value}
        onChange={(e) => setValue(e.target.value)}
      />

  </div>
       <div>
        {Agevalue !='' &&<label className={`${contactStyle.labelOfUserage}`}>userAge</label>}
        <input className='d-block mx-auto border border-start-0 border-top-0 border-end-0 rounded-2 w-50 px-3 mb-5 mt-2' type="text" name='userage' placeholder='userAge'
        value={Agevalue} onChange={(e)=> setAgeValue(e.target.value)}
        />
           </div>  
        <div>
        {Emailvalue !='' &&<label className={`${contactStyle.labelOfUseremail}`}>userEmail</label>}
        <input className='d-block mx-auto border border-start-0 border-top-0 border-end-0 rounded-2 w-50 px-3 mb-5 mt-3' type="email" name='useremail' placeholder='userEmail'
        value={Emailvalue} onChange={(e)=> setEmailvalue(e.target.value)}/>
        </div>

        <div>
          {Passvalue !='' &&<label className={`${contactStyle.labelOfUserPass}`}>userPass</label>}
        <input className='d-block mx-auto border border-start-0 border-top-0 border-end-0 rounded-2 w-50 px-3 mb-5 mt-3' type="password" name='userpass' placeholder='userPassword'
        value={Passvalue} onChange={(e)=> setEPassvalue(e.target.value)}/>
        </div>
      <button className={`py-2 px-3 mb-3 border-0 text-light rounded-2 ${contactStyle.btn}`}>send Message</button>
      </form>
    </div>
  </>
}
