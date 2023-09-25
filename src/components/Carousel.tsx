
import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/1.jpg"
        alt="image 1"
        className="h-full w-full rounded-lg object-cover object-center"
      />
      <img
        src="/2.jpg"
        alt="image 2"
        className="h-full w-full rounded-lg object-cover object-center"
      />
      <img
        src="/3.jpg"
        alt="image 3"
        className="h-full w-full rounded-lg object-cover object-center"
      />
    </Carousel>
  );
}