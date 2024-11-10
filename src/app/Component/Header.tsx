import Link from "next/link";
import React from "react";
export default function Header(){
  return(
    <div >
      <ul className="flex gap-4 p-4 bg-gray-400 md:flex-row md:gap-8">
<li>
  <Link href="/">Home</Link>

</li>
<li><Link href="/about">About</Link></li>
<li><Link href="/career">Career</Link></li>
      </ul>
    </div>
  )
}