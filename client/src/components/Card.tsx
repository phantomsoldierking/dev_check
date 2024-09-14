import '../index.css';
import { Swords } from 'lucide-react';

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="card w-full mt-36">
      <div className="flex flex-col items-center gap-12 py-36">
        <span className="icon">
          <Swords />
        </span>
        
        <div className=" flex flex-col gap-6 ml-4 text-2xl">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
      </div>
      <div className="shine"></div>
      <div className="background">
        
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>

      </div>
    </div>
  );
}

export default Card;
