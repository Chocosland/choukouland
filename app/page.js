import Image from "next/image";
import Navbar from "./components/Navbar";
import Opening from "./blocks/Opening";
import AboutUs from "./blocks/AboutUs";
import Roadmap from "./blocks/Roadmap";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen">
        <Opening />
        <AboutUs />
        <Roadmap />
      </section>
    </main>
  );
}
