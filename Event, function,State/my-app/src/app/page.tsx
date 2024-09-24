"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("Asifa")
  const apple = (item:any) => {
      alert (item)
  }
  return (
     <>
     
<div>
   <h1>I am learning Event, function and states {name}</h1>
    <button onClick={() => {
      setName("Asfa")
      // apple("fruit")
    }}>Click Me</button>
</div>
     </>
     );
}

