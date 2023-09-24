import Link from "next/link";
import type {ReactNode} from "react";

type Probs ={
    children: ReactNode;
}

export default function Layout(probs:Probs){
  return(
    <div>
        {probs.children}
      <nav className="flex items-center gap-2">
        <Link href="/" className="underline text-blue-500">Home</Link>
        <Link href="/tentang" className="underline text-blue-500">Tentang</Link>
        <Link href="/informasi" className="underline text-blue-500">Informasi</Link>
      </nav>
    </div>
  )
}