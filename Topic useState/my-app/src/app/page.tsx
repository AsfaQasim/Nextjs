"use client"
import React,{ useState } from "react"


const page = () => {
  const [data, setdata] = useState("My name is Asifa")
  return(
    
    <>
    <div className="flex item-center justify-center font-bold  border h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-auto mt-auto">
      <div className="text-center font-bold mb-auto mt-auto ml-28">{data}</div>
    <button onClick={() => {
      setdata("Hello Everyone")
    }} className=" w-32 h-12 rounded-md bg-gradient-to-l from-slate-500 via bg-pink-950 to via-red-400 w-18 font-bold border-solid mb-96 mt-96 -mr-12">Update</button>
    </div>
    </>
  )
}
export default page