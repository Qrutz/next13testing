import "../../styles/globals.css";

import React from 'react'
import Link from "next/link";


async function getData() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/`);
    return res.json();
}


export default async function CharacterPage() {
    const characters = await getData();
    console.log(characters);
    

  return (
    <div className=' text-center container mx-auto w-full p-5'>
        <h1 className="text-2xl font-extrabold">Characters</h1>
        <ul>
            {characters.results.map((character:any) => (
                <Link href={`/Characters/${character.id}`}>
                <li className="text-xl font-bold text-blue-500 hover:text-blue-700 cursor-pointer">
                    {character.name}
                </li>
                </Link>
            ))}
        </ul>



    </div>
  )
}
