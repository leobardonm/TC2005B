import Image from "next/image";
import Link from "next/link"
import Cuadrado from "./components/Cuadrado";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
    <div className="grid grid-cols-3">

      <Cuadrado color="black" />
      <Cuadrado color="white" />
      <Cuadrado color="black" />

      <Cuadrado color="white" />
      <Cuadrado color="black" />
      <Cuadrado color="white" />

      <Cuadrado color="black" />
      <Cuadrado color="white" />
      <Cuadrado color="black" />
      </div>
      {/* No funciono cambiar a la page2 */}
      <Link href="/page2" className="text-blue-500 hover:underline">
        page2
      </Link> 
    </div>
  );
}