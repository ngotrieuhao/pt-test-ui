import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col justify-center items-center">
        <p className="text-base text-primary font-medium">Our Vision</p>
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-slate-900">
          Built for Measure Sustainability
        </h2>
      </div>

      <div className="mt-10 relative rounded-[28px] overflow-hidden">
        <div className="relative md:w-271 md:h-165 w-full h-[200px] mx-auto">
          <Image
            src="/images/scenery-1.png"
            alt="GO-GENIE sustainability illustration"
            className="absolute inset-0 mx-auto object-cover"
            width={1002}
            height={567}
          />
        </div>

        <div className="md:absolute relative left-1/2 bottom-0 w-[94%] md:w-271 -translate-x-1/2 md:translate-y-[-10%] translate-y-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 md:p-6 shadow-[5px_-8px_18px_0px_rgba(10,99,161,0.12)]">
            <p className="md:text-[18px] text-base text-slate-700 text-center max-w-259 mx-auto">
              At GO-GENIE®, sustainability starts with understanding your
              impact. We provide accurate, transparent carbon data and
              actionable insights so businesses can measure emissions, benchmark
              performance, and make informed decisions. Turning data into
              measurable, real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
