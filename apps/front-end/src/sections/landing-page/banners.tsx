'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    src: '/banners/1.png',
  },
  {
    id: 2,
    src: '/banners/1.png',
  },
  {
    id: 3,
    src: '/banners/1.png',
  },
];

const Banners = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="overflow-hidden mt-6" ref={emblaRef}>
      <div className="flex">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="group relative grow-0 shrink-0 basis-full"
          >
            <Image
              alt={`Banner ${banner.id}`}
              src={banner.src}
              className="w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
