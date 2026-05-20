import Image from "next/image";
import React from "react";

const LogisticsOperation = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative">
        <div className="overflow-hidden rounded-[40px] bg-slate-100 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <Image
            src="/images/ecosystem.png"
            alt="Sustainable logistics ecosystem"
            className="w-full object-cover"
            width={800}
            height={600}
          />
        </div>

        <div className="absolute text-center left-1/2 top-[72%] w-[92%] -translate-x-1/2 -translate-y-1/2 md:w-3/4 lg:w-[1084px] lg:h-[288px]">
          <div className="rounded-[32px] bg-white/95 px-6 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <p className="text-3xl md:text-4xl text-slate-900">
              Start Building a More Sustainable
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-tight">
              Logistics Operation
            </h2>
            <p className="mt-4 text-[18px] max-w-[762px] mx-auto text-slate-600">
              Take control of your emissions, meet sustainability goals, and
              create measurable impact. GO SMART, GO GREEN, GO-GENIE®.
            </p>
            <button
              type="button"
              className="mt-10 inline-flex h-10 items-center justify-center rounded-[14px] bg-gradient-to-r from-primary to-primary px-6 text-sm font-semibold text-white transition hover:from-sky-700 hover:to-sky-600"
              style={{
                boxShadow:
                  "5px 5px 14px rgba(1,63,114,0.18), inset -6px -6px 14px rgba(0,34,47,0.26)",
              }}
            >
              Talk To Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsOperation;
