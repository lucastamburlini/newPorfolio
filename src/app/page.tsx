import Hero from "@/components/ui/Hero";
import Prices from "@/components/ui/Prices";;

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 max-w-5xl m-auto"></div>
      <Prices />
    </main>
  );
}
