import React from 'react'

const Home = () => {
         const [user,setuser]=React.useState([""])
         const getUser=async ()=>
         {
                 const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
                 
         }
  return (
         <>
       
         {/* <section className="w-full h-[90vh] bg-orange-300">
         <div className="my-[10vh] py-44 mx-auto w-[90vw] h-[70vh] ">
                  <div className="flex flex-row ">
                           <div className="bg-[#fcf9f8] w-[50vw] h-[70vh] px-3 rounded-2xl  flex flex-col space-x-6 justify-start gap-8 ">
                              <span className='py-[5vh] h-[10vh] font-[#DA4621] text-center text-4xl'>Stay with Ease </span>
                              <h1 className="font-serif text-3xl line-clamp-5 font-semibold  mx-auto">Discover Unforgettable Moments at Hostello 🌍✨
Experience Comfort, Community, and Adventure in the Heart of Patna. </h1>  
                              <p className="text-xl font-medium leading-[5vh]">Our hostel is more than just a place to stay, a vibrant hub of exploration and connection. As you step through our doors, you ll be greeted by modern accommodations designed for your utmost comfort.</p> 
                              <button className="bg-red-700 hover:bg-red-400  text-white w-2/3 font-bold text-4xl h-[6vh] mx-auto rounded lg:w-[30vw]h-[10vh]">Explore Hostello </button>   
                                    
                           </div>
                           <div className="bg-[#f8f7f7] w-[40vw] h-[70vh]">
                                    <Image src="https://images.unsplash.com/photo-1626265774643-f1943311a86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3Dvvvvv"width={90} height={70} className="py-[10vh] w-[40vw] h-[75vh] x-auto justify-items-end" alt={''}/>
                           </div>
                  </div>
         </div>

  </section> */}
  <button onClick={getUser} >
         <div>   </div>
  </button>

  </>
  )
}
export default Home