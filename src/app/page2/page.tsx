import Image from "next/image";
import Link from "next/link";
import Rectangle from '../components/Cuadrado';

export default function Page2() {
  return (
    <div className="min-h-screen flex items-center justify-center"> 
    <div className="w-64 h-32 bg-green-500">
      <Link href="/" className="text-blue-500 hover:underline items-center justify-center">home</Link>

     </div>

    </div>
  );
}
