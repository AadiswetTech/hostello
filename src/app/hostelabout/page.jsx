import React from 'react'

const page = () => {
  return (
         <>
    <section className="mt-20">
         <h1  className='mt-10 text-center text-red-700 text-3xl font-semibold'>The Management System for All Your Hostel Need</h1>
         <div className='mt-5 mx-auto shadow-xl w-[80vw]  bg-slate-100 grid lg:grid-cols-4 md:grid-cols-2 gap-2 '>
                  <div className="bg-slate-50 ">
                           <div className="flex flex-col text-center sm:w-full">
                                    <img src="https://www.petpooja.com/assets/images/pricing/Clients.webp" className="px-12 h-[30vh]"/>
                                    <span className='text-red-500 text-3xl font-bold' >24/7</span><p className="text-slate-900 font-semibold ">Customer Support</p>
                           </div>
                  </div>
                  <div className="bg-slate-50">
                  <div className="flex flex-col text-center align-middle sm:mx-auto">
                           <img src="https://www.petpooja.com/assets/images/pricing/24_7.webp" className="px-12 h-[30vh]"/>
                           <span className='text-red-500 text-3xl font-bold' >24/7</span><p className="text-slate-900 font-semibold ">Customer Support</p>
                  </div>
                  </div>
                  <div className="bg-slate-50 ">
                  <div className="flex flex-col text-center justify-between">
                           <img src="https://www.petpooja.com/assets/images/pricing/Bills-processed.webp" className="px-12 h-[30vh]"/>
                           <span className='text-red-500 text-3xl font-bold' >20+</span>
                  </div>
                  </div>
                  <div className="bg-slate-50">
                  <div className="flex flex-col text-center justify-between">
                  <img src="https://www.petpooja.com/assets/images/pricing/No-new-hardware-required.webp" className=" bg-slate-50 h-[30vh] px-12"/>
                           <span className='text-red-500 text-3xl font-bold' >20+</span>
                           <p className="font-semibold  text-slate-900">No new Hardware requirement</p>
                  </div>
                  </div>
                 
         </div>
         
    </section>
    <section className="mt-10">
         <div className="mx-auto w-[95vw] h-[70vh] bg-orange-500">
                  <div className=" bg-slate-500 w-[90vw] h-45"></div>
         </div>
         </section>
    <section className="mt-5">
         <div className="mx-auto w-[80vw] h-[90vh] bg-slate-100 grid lg:grid-cols-4 md:grid-cols-2 gap-2">
                  <div className="bg-green-200 col-span-4">1</div>
                  <div className="bg-red-200 col-span-2">2</div>
                  <div className="bg-blue-400 col-span-2 row-span-2">
                           <img src="./hostelop.jpg"/>
                  </div>
                  <div className="bg-red-200 col-span-2">4</div>
                  {/* <div className="bg-green-400 row-span-3">5</div>
                  <div className="bg-red-500">6</div> */}
                  
         </div>

    </section>
    <section className="mt-5">
         <div className="w-full mx-auto bg-red-200 h-40 "></div>
    </section>
    </>
  )
}

export default page