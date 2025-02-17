import Image from "next/image";
import Link from "next/link";
import Rectangle from '../components/Cuadrado';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center"> 
    <div className="w-64 h-32 bg-green-500">
      <Link href="/page2" className="text-blue-500 hover:underline">page2</Link>
     </div>

    </div>
  );
}
