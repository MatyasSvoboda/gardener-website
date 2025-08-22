import Hero from "./components/Hero"
import Offer from "./components/Offer"
import CTA from "./components/CTA"
import Collaboration from "./components/Collaboration"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero/>
      <Offer/>
      <CTA/>
      <Collaboration/>
      <Footer/>
    </div>
  );
}
