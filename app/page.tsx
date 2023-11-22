import Image from "next/image";
import Hero from "./_components/home/hero";
import Animation from "./_components/home/animation";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </main>
  );
}
