import Carousel from "site/islands/Carousel.tsx";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  organization: string;
}

interface WhatSayAboutUsProps {
  title: string;
  testimonials: Testimonial[];
}

export default function WhatSayAboutUs(
  { title, testimonials }: WhatSayAboutUsProps,
) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <span className="text-3xl font-semibold">{title}</span>
        <div className="flex justify-center mt-12">
          <Carousel testimonials={testimonials} />
        </div>
      </div>
    </>
  );
}
