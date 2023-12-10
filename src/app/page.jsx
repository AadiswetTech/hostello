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
                  
                  <section className="mt-20 w-full min-h-[90vh] bg-slate-50 ">
                 <div className="mt-5 mx-auto w-[90vw] rounded-lg bg-slate-900 grid lg:grid-cols-2 gap-5">
                  <div className="bg-slate-50 sm:w-full">
                           <div className="flex flex-col">
                                    <h1 className="mt-2 text-center text-4xl font-bold font-serif">  Hostello H.M.S Software Made Simple !</h1>
                                    <p className="font-thin leading-8 text-2xl font-sans"> A Comprehensive, Integrated System designed to simplify and optimize the 
administrative and operational tasks involved in running a hoste</p>
                                    <button className='mt-7 bg-red-700 w-[25vw] mx-auto font-bold rounded-sm text-white text-center'>Take free Demo -{'>'}</button>
                           </div>
                  
     </div>      
                  <div className=" bg-slate-50">
                  <div className="bg-slate-50 rounded  basis-[55%] lg:w-[50%] h-[70vh]">
        <img src="https://media.istockphoto.com/id/1373119986/vector/worker-make-analysis.jpg?s=612x612&w=0&k=20&c=tnlELE2IPole3hn0wIfkgQ_T-oR4HLEjw9g_gD8vku4=" className="py-[10vh] w-[40vw] h-[70vh] rounded-full bg-slate-50 " alt="Hostel Image" />
      </div>
                  </div>
                 </div>
                </section>
                
                <section className="w-full min-h-[90vh] bg-slate-50 mt-0">
                <div class="w-full md:mx-auto bg-indigo-500 md:h-[50vh] sm:bg-orange-100 rounded-xl shadow-md overflow-hidden md:w-full">
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
</div>
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
