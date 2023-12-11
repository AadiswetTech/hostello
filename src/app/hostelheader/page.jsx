import React from 'react'
import Link from "next/link"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faBars} from '@fortawesome/free-solid-svg-icons';
const HostelHead = () => {
const Menu=(e)=>
{
let list=Document.querySelector('ul');
e.name==="menu" ?(e.name="close",list.classList.add('top-[80px]'),
list.classList.add('opacity-100')):(e.name="menu",list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

  return (

<>
<nav className=' bg-white mx-[3vw] sticky top-0 shadow md:flex md:flex-row md:items-center md:justify-between'>
  
  <div className="flex justify-betweeen items-center">
    <span className="text-2xl font-serif cursor-pointer">
      <img className="h-12 inline" src="./H.png"></img>
      Hostello
    </span>
    <span className="text-3xl cursor-pointer mx-2 md:hidden block">
    <FontAwesomeIcon icon={faBars} onClick={Menu()}/>
    </span>
  </div>
  <ul className="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full
   left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 
   opacity-0 top-[400px] transition-all ease-in duration-500">
    <li className="mx-4">
      <Link href="/" className="text-xl hover:text-cyan-500 duration-500">Home</Link>
    </li>
    <li className="mx-4">
      <Link href="/" className="text-xl hover:text-cyan-500 duration-500">Home</Link>
    </li>
    <li className="mx-4">
      <Link href="/" className="text-xl hover:text-cyan-500 duration-500">Home</Link>
    </li>
    <li className="mx-4">
      <Link href="/" className="text-xl hover:text-cyan-500 duration-500">Home</Link>
    </li>
  </ul>

 
    <button className='bg-red-300 px-6 py-2 text-black font-semibold font-sans duration-500 hover:bg-red-500 rounded'>Contact Us</button>
 
  
  
 


  
 
</nav>
</>
         )
}

export default HostelHead