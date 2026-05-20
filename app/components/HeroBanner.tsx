import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      className="md:py-16 py-8"
      style={{
        background:
          "linear-gradient(180deg,#3f89bd 0%, rgba(63,137,189,0.08) 90%, #ffffff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center z-20">
        <h1 className="mt-6 text-4xl md:text-[40px] font-medium text-white">
          Measure and Reduce Your Logistics Carbon Footprint
        </h1>
        <p className="mt-3 text-white text-[18px] font-normal">
          Track emissions, gain real-time insights, and make smarter, more
          sustainable logistics decisions.
        </p>

        <div className="mt-8 cursor-pointer z-20">
          <Link
            href="#"
            className="inline-flex items-center gap-4 bg-white text-sky-600 px-6 py-2 rounded-xl shadow-lg text-lg font-medium hover:bg-slate-50"
          >
            Explore Sustainability Solutions
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow"
              width={5}
              height={10}
            />
          </Link>
        </div>
      </div>

      <div className="relative top-0 z-10">
        <Image
          src="/images/hero-banner.svg"
          alt="hero banner"
          className="w-full h-auto object-cover"
          width={1440}
          height={600}
        />
      </div>
    </section>
  );
}
