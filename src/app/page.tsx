import Image from "next/image";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"; 
import { Trainer } from "./components/Know/Trainer";
import { Services } from "./components/Services/Services";
import { Benefits } from "./components/Benefits/Benefits";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <Trainer />
        <Services />
        <Benefits />
        <Testimonials />
        <Footer />
    </>
  );
}
