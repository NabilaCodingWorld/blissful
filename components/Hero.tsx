import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6rem)] bg-[url('/assets/images/hero-banner.jpg')] bg-no-repeat bg-cover bg-center bg-fixed relative">
      <span className="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent"></span>
      <div className="text-white container py-20 flex flex-col items-center justify-center text-center h-full absolute left-0 right-0 top-0 bottom-0 z-[2] gap-5">
        <h1 className="md:text-7xl text-4xl">
          Providing memorable beauty experiences
        </h1>
        <p className=" w-[1000px]">
          Welcome to our Massage Therapy Center, where relaxation and
          rejuvenation meet. Our skilled therapists are dedicated to providing
          personalized treatments tailored to your needs. Whether you seek
          relief from tension, stress reduction, or simply a luxurious pampering
          session, we are here to ensure you leave feeling refreshed and
          revitalized.
        </p>
        <Link
          className="bg-green px-8 py-4 rounded-full font-semibold"
          href="/appointment"
        >
          Make an Appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
