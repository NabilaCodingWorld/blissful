import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const features = [
  {
    image: "/assets/images/feature-1.jpg",
    subheading: "Best Products",
    heading: "Online appointments",
    paragraph: "Easy & user-frinedly online process",
  },
  {
    image: "/assets/images/feature-2.jpg",
    subheading: "Best Products",
    heading: "Gift cards available",
    paragraph: "We offer gift cards to our special clients",
  },
  {
    image: "/assets/images/feature-3.jpg",
    subheading: "Best Products",
    heading: "Special offers",
    paragraph: "We run special offers both for services and products",
  },
];

const Features = () => {
  return (
    <section className="bg-yellow py-20 ">
      <div className="container">
        <SectionTitle
          title="Professional
massage & spa center"
          subTitle="taking care of you"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-1.5"
              key={feature.image}
            >
              <div className="w-60 aspect-square rounded-full overflow-hidden mb-5">
                <Image
                  className="w-full h-full object-cover"
                  src={feature.image}
                  alt={feature.heading}
                  width={540}
                  height={540}
                  priority
                />
              </div>

              <p className="text-rose">{feature.subheading}</p>
              <h3 className="text-xl">{feature.heading}</h3>
              <p>{feature.paragraph}</p>

              <Link
                className="bg-white flex items-center justify-center h-10 w-10 rounded-full mt-5"
                href="/services"
              >
                <MoveRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
