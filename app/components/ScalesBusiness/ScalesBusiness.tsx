import Image from "next/image";
import React from "react";

const items = [
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with accurate carbon tracking data.",
    image: "/images/data-1.png",
  },
  {
    title: "Scalable Solutions",
    description:
      "Apply sustainability practices across your entire logistics network.",
    image: "/images/data-2.png",
  },
  {
    title: "Real Impact",
    description: "Reduce emissions while maintaining operational efficiency.",
    image: "/images/data-3.png",
  },
];

const ScalesBusiness = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-slate-900">
          Sustainability That{" "}
          <span className="text-primary">Scales with Your Business</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[18px] text-slate-500">
          Reduce emissions, improve efficiency, and operate more responsibly
          with GO-GENIE®.
        </p>
      </div>

      <div className="mt-14 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="mx-auto w-full max-w-[348px]  p-6 text-center "
          >
            <div className="mx-auto mb-6 flex h-[170px] w-[187px] items-center justify-center ">
              <Image
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-full"
                width={187}
                height={170}
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScalesBusiness;
