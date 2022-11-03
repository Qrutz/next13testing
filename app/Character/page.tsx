
import React from 'react';
import {usePathname} from 'next/navigation';


async function getData() {
  // get the url params 
 


  const res = await fetch('https://rickandmortyapi.com/api/character/235');

  return res.json();
}


export default async function Page() {
  const data = await getData();
  return (
    <div>

     <h2> {data.name} </h2>
    <img src={data.image} alt="" />
    </div>
  )
}
