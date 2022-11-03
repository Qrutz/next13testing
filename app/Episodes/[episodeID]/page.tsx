
import React from 'react';






export default async function Page({params} : {
    params: {
        episodeID: string
    }
}) {



  const r = await fetch(`https://rickandmortyapi.com/api/episode/${params.episodeID}`).then(res => res.json());

  return (
    
    <div>
       <head> 
        <title>Character</title>
      </head>

     

     <h2> {r.name} </h2>
    <p>{r.episode}</p>

    {r.characters.map((character:any) => (
        <div>
            <img src={character.image} alt="" />
            <p>{character.name}</p>

            </div>
    ))}
    </div>
  )
}
