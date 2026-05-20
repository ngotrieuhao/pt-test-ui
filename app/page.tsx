import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import OurVision from "./components/OurVision/OurVision";
import Monitor from "./components/Monitor/Monitor";
import Sustainability from "./components/Sustainability/Sustainability";
import ScalesBusiness from "./components/ScalesBusiness/ScalesBusiness";
import LogisticsOperation from "./components/LogisticsOperation/LogisticsOperation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main>
        <HeroBanner />
        <OurVision />
        <Monitor />
        <Sustainability />
        <ScalesBusiness />
        <LogisticsOperation />
        <Footer />
      </main>
    </div>
  );
}
