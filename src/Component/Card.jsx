'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Card = ({ icon,para,heading,link }) => {
  return (
    <>
    <div className="p-4 max-w-sm bg-blue-700 ">
         <div className="flex rounded-lg h-full  shadow-md text-blck p-8 flex-col">
                  <div className="flex items-center mb-3">
                           <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded flex-shrink-0">
                 <FontAwesomeIcon icon={icon}/>
                           </div>
                           <h2 className="text-3xl font-bold">{heading}</h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                           <p className="text-[1vw]">{para}</p>
                           <Link href={link} className=' text-red-700 px-24'>Check This
                           <FontAwesomeIcon icon={faArrowRight} />
                           </Link>
                  </div>
         </div>
    </div>
    </>
  )
}

