"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faPhone,faBars,faXmark} from '@fortawesome/free-solid-svg-icons';

import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleDown'
type Props = {}
const slideContent=[
         "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         "https://images.pexels.com/photos/8296949/pexels-photo-8296949.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",

]

export const ImgSlider = (props: Props) => {
          const [currentIndex,setIndex]=useState(0);
          function prevImage()
          {
                  const newIndex=(currentIndex -1 + slideContent.length)%slideContent.length;
                  setIndex(newIndex)
          }
          function nextImage()
          {
                  const newIndex=(currentIndex  +1 )%slideContent.length;
                  setIndex(newIndex)
          }
  return (
   <div className="relative ">
         <section className="flex justify-center items-center h-[275px} w-[600px]">
                  {/* mapping of image */}
                  {slideContent.map((content,index)=>(
                           <>
                           {currentIndex ===index ? (
                                    <Image key={index} width={200} height={200} src={content} alt={`Slide {index+1}`}
className="rounded  w-[60vw] h-[40vh] lg:w-[50vw] lg:h[30vh] transition-all object-cover"/>
                           ):null}
                           </>

                  ))}
         </section>
         {/* button component */}
         <section className="  flex flex-row justify-between  text-black  text-2xl">
         <button onClick={prevImage} >prev</button>
         <button onClick={nextImage}>next</button>
         </section>
     
   
   </div>
  )
}

