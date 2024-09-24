"use client"
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

const page = () => {
  const router = useRouter();
  const navigate = (name:string) => {
    router.push(name)
  }
  return (
    <div>
      <h1>This is my home page</h1>
      <br />
    <Link href={'./login'}>Go to login page</Link>
     <hr />
    <br />
    <Link href={'./about'}>Go to about page</Link>
    <br />
    <button onClick={() => router.push("/login")}>Go to login page</button>
    <br />
    {/* <button onClick={() => router.push("/about")}>Go to About page</button> */}
    <button onClick={() => navigate("/about")}>Go to About page</button>
<hr />
<br />

<Link href={"/about/aboutstudent"}>Go to my About Student page</Link>
<br />
<br />
<hr />
<Link href={"/about/aboutcollege"}>Go to my About College page</Link>
    

    </div>
  )
}

export default page
