

import React from "react";

import Link from "next/link";


const Header= ()=>{

return(

<header className='flex justify-between border-spacing-16 bg-gray-300'>
<div>
<h1 className='text-bold flex justify-between gap-24 text-red-500'>
  HURBAL-PRODUCT
</h1>

<nav>

{/* <ul className='flex gap-4 bg-red-400'> */}
<ul>

  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/footer">Footer</Link>
  <Link href="/hero">Hero</Link>



</ul>



</nav>





</div>







</header>



)

}
export default Header






