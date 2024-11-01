



 import Link from "next/link";

import React from 'react'
const Footer =()=>{

return(

<header className='flex justify-between border-spacing-16 bg-gray-300'>
<div>
<h1 className='text-bold flex justify-between gap-24 text-red-500'>
  HURBAL-PRODUCT
</h1>

<nav>

<ul className='flex gap-4 bg-red-400'>


  <li className= 'text-sm bg-slate-500'><Link href="/">Home</Link></li>
  <li className= 'text-sm bg-slate-500'><Link href="/">About</Link></li>




</ul>

</nav>

</div>

</header>

)

}


export default Footer




