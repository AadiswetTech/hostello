import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPersonBiking,faDoorOpen,faAddressBook} from '@fortawesome/free-solid-svg-icons';
const page = () => {
  return (
         <>
         
<section className="w-full h-[90vh] bg-slate-50 mt-10">
  <div className="pt-15 mt-12 mx-auto w-full lg:w-[90vw] h-[90vh] lg:h-[90vh] rounded">
    <div className="flex flex-col lg:flex-row gap-8 basis-[45%] rounded-xl">
      <div className="bg-slate-50 w-full  lg:w-[50%] h-auto lg:h-[70vh] px-3 flex flex-col gap-7 space-y-6 lg:space-y-0 lg:space-x-6 justify-start">
       
        <h1 className="font-serif mt-[4rem] text-[3vw] lg:text-4xl xl:text-2xl line-clamp-5 sm:text-4xl font-bold mx-auto">
          Hostello H.M.S Software Made Simple !
        </h1>
        <p className="text-base line-clamp-5 lg:text-[1rem] from-neutral-900 font-thin leading-[5vh]">
        A Comprehensive, Integrated System designed to simplify and optimize the 
administrative and operational tasks involved in running a hoste
        </p>
        <button className="bg-black basis-[20%] text-slate-50 hover:bg-red-400  sm:w-[35%] xl:w-[45%] font-bold text-xl lg:text-3xl xl:text-4xl h-[6vh] lg:h-[10vh] mx-auto p-0 mt-5 rounded-2xl">
          Explore <FontAwesomeIcon icon={faPersonBiking} />
        </button>
      </div>
      <div className="bg-slate-50 rounded  basis-[55%] lg:w-[50%] h-[70vh]">
        <img src="https://media.istockphoto.com/id/1373119986/vector/worker-make-analysis.jpg?s=612x612&w=0&k=20&c=tnlELE2IPole3hn0wIfkgQ_T-oR4HLEjw9g_gD8vku4=" className="py-[10vh] w-full h-[70vh] rounded-full bg-slate-50 " alt="Hostel Image" />
      </div>
    </div>
  </div>
</section>

<section className="bg-[#ecc3ae]">
         <div className="my-5 w-full bg-[#ecc3ae] mx-auto md:py-[80] h-[70vh] px-10 py-10 flex gap-6 md:flex-row flex-col">
                  <div className="basis-[45%] h-fit">
                           <img src="./hosteldash.png" className="w-6/12"></img>
                  </div>
                  <div className="basis-[55%] px-[4rem] py-[8vh] bg-[#ecc3ae] flex flex-col">
                           <div className="py-1">
                           <h1 className="text-center text-3xl text-black font-bold md:text-5xl">
                           A quick 3-click restaurant billing software
                           </h1>
                           <p className="text-black text-xl">Take orders, punch bills and generate KOT. Accept payments
                            either by splitting bill or merging tables. Easily apply discounts and coupons.
                            All of this, and more, is easy and quick with Petpooja's restaurant POS.</p>
                           </div>
                           
                  </div>
         </div>
</section>
<section className="bg-gray-300">
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
                  <FontAwesomeIcon className="dark:bg-gray-500 aspect-square" icon={faAddressBook} size='4x' />
                  <h2 className="text-xl font-bold">Staff Management</h2>
                  </div>	
		</div>
</section>

         </>
        
  )
}

export default page