import Link from "next/link";
import "../styles/globals.css";





export default function RootLayout({children}: {
  children: React.ReactNode
}) {



  
  return (
    <html>
      <head></head>
      

      <body>
        <div className=" w-full flex justify-around font-extrabold text-4xl  ">
          <Link href="/">Home</Link>
          <Link href="/Episodes">Episodes</Link>
          <Link href="/Characters">Characters</Link>      
        </div>
        {children}
        
        </body>
      
    </html>
  )
}
