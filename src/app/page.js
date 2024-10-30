import Image from "next/image";
import bg from '../../public/backgrounds/homepage.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority src={bg} alt='background image of stars and space' fill className="-z-50 w-full h-full object-cover object-center" />

      <div className="w-full h-screen text-accent">
        HELLO THERE
      </div>
    </main>
    
  );
}
