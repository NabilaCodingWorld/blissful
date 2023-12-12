import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const services = [
  {
    image: "/assets/images/service-1.png",
    title: "Essential oils",
    description: "We choose only natural products for our procedures.",
  },
  {
    image: "/assets/images/service-2.png",
    title: "Rehabilitation",
    description: "Recovery after the injuries, surgeries and sport events.",
  },
  {
    image: "/assets/images/service-3.png",
    title: "Spa procedures",
    description: "Skin treatments for the entire body, face and nails.",
  },
  {
    image: "/assets/images/service-4.png",
    title: "Relax massage",
    description: "The best way to get rid of daily stress and recuperate.",
  },
];

const Services = () => {
  return (
    <section className="pt-20">
      <div className="container mb-20">
        <SectionTitle
          subTitle="Our Popular Services"
          title="Memorable beauty experience"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              className="flex flex-col items-center gap-1.5"
              key={service.image}
            >
              <div className="w-28 aspect-square rounded-full overflow-hidden mb-5">
                <Image
                  className="w-full h-full object-cover"
                  src={service.image}
                  alt={service.title}
                  width={540}
                  height={540}
                  priority
                />
              </div>
              <h3 className="text-xl">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div className="h-[60vh] bg-[url('/assets/images/service-banner.jpg')] bg-no-repeat bg-cover bg-center bg-fixed relative">
        {/* OVERLAY */}
        <span className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent" />

        {/* CONTENTS */}
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[2] container py-20 flex flex-col gap-5 items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-5xl">
            An incredible spa experience
          </h1>
          <Link
            href="/appointment"
            className="lg:text-lg xl:text-xl inline-block bg-rose py-4 px-9 rounded-full font-semibold hover:bg-green transition"
          >
            Make an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
