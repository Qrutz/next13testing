import Link from 'next/link';
import React from 'react'

async function getData() {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`);
    return res.json();
}

export default async function page() {
    const episodes = await getData();
 
  return (
    <div>
        <h1>Episodes</h1>
        <ul>    
            {episodes.results.map((episode:any) => (
                <Link key={episode.id} href={`/Episodes/${episode.id}`}>
                <li className="text-xl font-bold text-blue-500 hover:text-blue-700 cursor-pointer">
                    {episode.name}
                </li>
                </Link>
            ))}
        </ul>


    </div>
  )
}
