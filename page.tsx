

import React from "react";
import Link from "next/link";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Image from "next/image";
import Image1 from './../../public/image1.webp'

export default function Homepage(){
return(


 <div >
<ul>
    
 <Navbar/>
<Footer/>
<Hero/>
</ul>
<h1> 
<img className ="w-90 , h-60 rounded-3xl relative " src="image1/landscape.jpg" alt="landscape" />
Landscape painting
</h1>
<br />


<h1>
<img className ="w-90 , h-60 rounded-full relative " src="image1/nature.jpg" alt="nature" /> Natural painting
</h1>

<br />

<h1>
<img className ="w-100 , h-65 rounded-full relative " src="image1/Nature.png" alt="Nature" />

 Peace of Nature
</h1>
</div>
);

}
