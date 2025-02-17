interface CuadradoProps {
    color: string;
  }
  
  export default function Cuadrado({ color }: CuadradoProps) {
    return <div style={{ backgroundColor: color }}  className="w-32 h-32"></div>;
  }


