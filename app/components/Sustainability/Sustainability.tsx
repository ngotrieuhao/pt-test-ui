import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Track Progress",
    description:
      "Monitor your progress towards sustainability and certification targets.",
    image: "/images/carousel-1.png",
  },
  {
    title: "Generate Reports",
    description:
      "Create detailed reports for audits, compliance, and internal tracking.",
    image: "/images/carousel-2.png",
  },
  {
    title: "Showcase Achievements",
    description:
      "Highlight your sustainability efforts and build trust with customers.",
    image: "/images/carousel-3.png",
  },
];

const Sustainability = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <p className="text-3xl font-medium text-slate-900">
          Simplify Sustainability
        </p>
        <h2 className="text-3xl text-primary md:text-4xl font-medium ">
          Reporting and Compliance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[18px] text-slate-500">
          Track progress, generate reports and meet sustainability standards
          with ease.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="rounded-[32px] max-w-[1084px] h-[200px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8 flex items-center md:block"
          >
            <div className="relative grid gap-8 items-center lg:grid-cols-[1.25fr_1fr]">
              <div className="max-w-2xl z-10">
                <h3 className="text-3xl font-semibold text-slate-900">
                  {section.title}
                </h3>
                <p className="mt-3 max-w-[441px] text-xl  leading-7 text-slate-600">
                  {section.description}
                </p>
              </div>
              <div className="hidden md:block absolute right-0 -top-[85%] z-20">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-[420px] max-h-[240px] object-contain"
                  width={420}
                  height={240}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sustainability;
