import Image from "next/image";
import Link from "next/link";
import React from "react";

const Monitor = () => {
  const cardData = [
    {
      icon: "/icons/thunder.svg",
      title: "Optimise Delivery Routes",
      background: "#3F89BD29",
      description:
        "Reduce emissions by optimising routes and improving delivery efficiency.",
    },
    {
      icon: "/icons/eye.svg",
      title: "Monitor Environmental Impact",
      background: "#40ADA229",
      description:
        "Track carbon emissions across shipments with real-time insights.",
    },
    {
      icon: "/icons/home.svg",
      title: "Achieve Sustainability Goals",
      background: "#D7C33C29",
      description:
        "Set targets and measure progress toward your sustainability objectives.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex justify-center items-center flex-col">
      <div className="text-center">
        <p className="text-2xl md:text-4xl font-medium text-slate-900">
          Real-Time Carbon Tracking
        </p>
        <p className="text-2xl md:text-4xl font-medium text-primary">
          for Every Delivery
        </p>
        <p className="mx-auto mt-2 max-w-202 text-[18px] text-slate-500">
          Monitor emissions, optimise routes, and improve sustainability across
          your logistics operations.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cardData.map((card) => (
          <div
            key={card.title}
            className="mx-auto w-full max-w-[348px] h-[257px] rounded-[16px] bg-white border border-slate-100 p-6"
            style={{
              boxShadow:
                "0 20px 40px rgba(3,106,177,0.06), inset -8px -8px 16px rgba(3,106,177,0.07)",
            }}
          >
            <div className="flex flex-col items-start gap-4">
              <div
                style={{ background: card.background }}
                className={`flex h-12 w-12 items-center justify-center rounded-lg`}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="cursor-pointer mt-12 flex gap-4 items-center justify-center w-48 h-10 rounded-xl border border-primary bg-white">
        <p className="text-sm font-semibold text-primary">Book A Demo</p>
        <Image
          src="/icons/arrow-right.svg"
          alt="Arrow right"
          width={6}
          height={10}
        />
      </button>
    </section>
  );
};

export default Monitor;
