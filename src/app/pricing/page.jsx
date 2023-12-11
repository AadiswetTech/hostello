import React from 'react'

const page = () => {
  return (
    <>
    <section>
         <div className='mt-12 flex flex-col justify-between gap-4'>
                  <h2 className="text-center text-3xl text-yellow-900 font-bold">Transparent and affordable pricing</h2>
                  <p className="text-center text-lg font-light ">Manage Hostel operations efficiently without burning a hole in your pockets</p>
         </div>
    </section>
    <section className="w-full mt-2  bg-white h-[90vh]">
         <div className=" mx-auto w-[90vw] bg-white">
         <div className="mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 ">
         <div className="bg-red-200">
                  <div className="flex flex-col justify-between gap-3 border text-center  bg-white">
                           <h1 className="text-3xl font-bold text-black">Hostello H.M.S Core</h1>
                           <p className="text-lg font-light text-slate-800 pr-12">For any Hostel looking to automate their entire operation with affordable and easy-to-use software</p>
                           <span className="text-4xl text-red-700 font-bold">₹20000*</span>
                           <span className="text-slate-800">first year/per Hostel</span>
                           <p className='text-slate-800 pr-5'>+₹7,000* renewal from next year</p>
                           <button className="rounded-sm bg-red-700 w-[35vw] sm:w-[20vw]  text-2xl align-center mx-auto text-white px-18">Book Demo</button>
                           <div className="pt-5">
                                    <ul className="list-none sm:list-disc px-2 text-lg hover:text-lime-700">
                                             <li className="font-thin text-lg text-slate-800 hover:text-lime-700">
                                             Efficient cloud-based POS system that works with every OS
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                             Quick and easy inventory management
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                             100+ Real-time and simplified reporting
                                             </li>
                                             <li className='font-thin text-slate-800 hover:text-lime-700'>
                                                      24/7 Support

                                             </li>
                                    </ul>

                           </div>
                  </div>
         </div>
         <div className="">
                  <img src="hero.png"></img>
         </div>


        </div>
         </div>
       
         </section>
          <section className="mt-2">
         <h1  className='mt-2 text-center  text-red-700 text-3xl font-semibold'>The Management System for All Your Hostel Need</h1>
         <div className='mt-5 mx-auto shadow-xl w-[70vw]  border pb-4  bg-slate-100 grid lg:grid-cols-4 md:grid-cols-2 gap-2 '>
                  <div className="bg-slate-50 ">
                           <div className="flex flex-col text-center sm:w-full">
                                    <img src="https://www.petpooja.com/assets/images/pricing/Clients.webp" className="px-12 h-[30vh]"/>
                                    <span className='text-red-700 text-3xl font-bold' >50+</span><p className="text-slate-900 font-semibold ">Client Acrosss India</p>
                           </div>
                  </div>
                  <div className="bg-slate-50 h-1/2">
                  <div className="flex flex-col text-center align-middle sm:mx-auto">
                           <img src="https://www.petpooja.com/assets/images/pricing/24_7.webp" className="px-12 h-[30vh]"/>
                           <span className='text-red-700 text-3xl font-bold' >24/7</span><p className="text-slate-900 font-semibold ">On Call and on Site Support</p> 
                  </div>
                  </div>
                  <div className="bg-slate-50 ">
                  <div className="flex flex-col text-center justify-between">
                           <img src="https://www.petpooja.com/assets/images/pricing/Bills-processed.webp" className="px-12 h-[30vh]"/>
                           <span className='text-red-700 text-3xl font-bold' >20+</span>
                           <p className="text-slate-900 ">customer can add</p>
                  </div>
                  </div>
                  <div className="bg-slate-50">
                  <div className="flex flex-col text-center justify-between">
                  <img src="https://www.petpooja.com/assets/images/pricing/No-new-hardware-required.webp" className=" bg-slate-50 h-[30vh] px-12"/>
                           <span className='text-red-700 text-3xl font-bold' >No </span>
                           <p className="font-semibold  text-slate-900"> new Hardware requirement</p>
                  </div>
                  </div>
                 
         </div>
         
    </section>
         </>
  )
}

export default page