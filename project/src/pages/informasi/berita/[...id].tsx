import { useRouter } from "next/router"

export default function Informasi(){
  const router = useRouter();
  return(
    <div>
      <h1>Berita ID : {router.query.id}</h1>
    </div>
  )
}