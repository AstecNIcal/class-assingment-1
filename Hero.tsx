import Link from 'next/link'
import React from 'react'
import Header from './Header'



const Hero=()=>{

    return(

<div>
<h2  >Hero-section
</h2><p>This is very important section</p>
<ul>

<Link href="/">Home</Link>
<Link href="/about">About</Link>


</ul>

</div>


    )
}
export default Header








