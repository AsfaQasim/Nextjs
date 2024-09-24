
"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const navigate = (name:string) => {
    router.push(name)
  }
  return (
    <div>
      <h1>This is my login page</h1>
      <Link href={'./about'}>Go to about page</Link>
      <br />
      <button onClick={() => {
         navigate("/about")
      }}>Go to About page</button>

<br />
<hr />
<button onClick={() => {
  navigate("/login/loginstudent")
}}>This is login student page</button>

<hr />
<br />

<button onClick={() => {
  navigate("/login/loginteacher")
}}>This is login teacher page</button>



    </div>
  )
}

export default page
