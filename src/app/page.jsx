import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faAddressBook,faUsersGear} from '@fortawesome/free-solid-svg-icons';
export default function Home()
{
         return (
                  <>
                  
                  <section className="mt-2 w-full  bg-slate-300 ">
                 <div className="  mx-auto my-auto w-[90vw] h-[70vh] bg-white rounded-lg grid lg:grid-cols-2 gap-0">
                  <div className="border pt-5 h-[70vh] bg-white flex sm:w-full">
                           <div className="border-red-300 flex flex-col justify-start gap-6">
                                    <h1 className=" text-center text-4xl font-bold font-serif">  Hostello H.M.S Software Made Simple !</h1>
                                    <p className="font-thin px-3 leading-8 text-xl font-sans"> A Comprehensive, Integrated System designed to simplify and optimize the 
administrative and operational tasks involved in running a hostel</p>
                                    <button className=' px-[2rem] align-middle mx-auto bg-red-700 font-bold rounded-sm text-white text-center sm:w-[20vw] lg:px-7 sm:mx-0'>Take free Demo -{'>'}</button>
                           </div>
                  
     </div>      
                  <div className="  basis-[45%] ">
                  <div className="bg-slate-50  ">
        <img src="hero.png" className="py-[10vh]  h-[70vh] rounded-sm bg-white w-full " alt="Hostel Image" />
      </div>
                  </div>
                 </div>
                </section>
                
                <section className="w-full min-h-[90vh] bg-slate-50 mt-0">
                {/* <div class="w-full md:mx-auto bg-indigo-500 md:h-[50vh] sm:bg-orange-100 rounded-xl shadow-md overflow-hidden md:w-full">
  <div class="md:flex">
    <div class="">
      <img class="h-[49vh] w-full object-cover md:h-full md:w-[40vw]" src="/hosteldash.png" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-bg-orange-100 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
<div className="mt-4">
<div class="w-8/12 md:mx-auto bg-indigo-500 md:h-[50vh] sm:bg-orange-100 rounded-xl shadow-md overflow-hidden md:w-full">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-[49vh] w-full object-cover md:h-full md:w-[40vw]" src="/hosteldash.png" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
</div> */}
                </section>
                <section className="bg-slat-50 mt-5">
                <div className="container py-10 grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                                  <img src="https://www.petpooja.com/assets/images/pos/Quick-simple_md.webp" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                                  <div className=" width-[40%] gap-7 flex flex-col justify-center">
                                  <FontAwesomeIcon className="dark:bg-gray-500 aspect-square" icon={faAddressBook} size='4x' />
                                  <h2 className="text-xl font-bold">Hostel Analytics</h2>
                                  </div>
                                  <div className=" width-[40%] flex flex-col gap-7 justify-center">
                                  <FontAwesomeIcon className="dark:bg-gray-500 aspect-square" icon={faAddressBook} size='4x' />
                                  <h2 className="text-xl font-bold"> Registration</h2>
                                  </div>
                                  <div className=" width-[40%] flex flex-col gap-4 justify-center">
                                  <FontAwesomeIcon className="dark:bg-gray-500 aspect-square" icon={faAddressBook} size='4x' />
                                  <h2 className="text-xl font-bold">Room Management</h2>
                                  </div>
                                  <div className=" width-[40%] mt-0 flex flex-col gap-4  justify-center">
                                  <FontAwesomeIcon className="dark:bg-gray-500 aspect-square" icon={faUsersGear} size='4x' />
                                  <h2 className="text-xl font-bold">Staff Management</h2>
                                  </div>	
                                  </div>
                </section>
                <section className="mt-5 bg-slate-600 w-full">
                  <div className="max-w-[1320px] md:py-[80] py-5 mx-auto bg-red-400  h-[30vh]">
                           <div></div>
                  </div>
                </section>
                </>
         )
}
