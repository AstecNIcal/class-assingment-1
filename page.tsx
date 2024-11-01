import React from 'react'
import Link from 'next/link'
const About=()=>{

    return(

<div>
    <h1 className='bg-gray-300 border-spacing-3 border rounded-lg'
     >About</h1>
<button className="p-3 bg-red-500 m-1 border-black-400 border-spaing-4 rounded-md">Home</button>
     
<button className="p-3 bg-green-500 m-1 border-black-400 border-spaing-4 rounded-md">Aboutpage</button>


<ul>

<Link href="/">Home </Link>
<br />
<Link href="/about"> See About link </Link>
<br />


</ul>
</div>

    );

}
export default About














