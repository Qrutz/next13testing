
import React from 'react';
import {usePathname} from 'next/navigation';


async function getData() {
  // get the url params 
 


  const res = await fetch(`https://rickandmortyapi.com/api/character/235{params.id}`);

  return res.json();
}


export default async function Page({params} : {
    params: {
        charid: string
    }
}) {



  const r = await fetch(`https://rickandmortyapi.com/api/character/${params.charid}`).then(res => res.json());

  return (
    
    <div>
       <head> 
        <title>Character</title>
      </head>

     

     <h2> {r.name} </h2>
    <img src={r.image} alt="" />
    </div>
  )
}
