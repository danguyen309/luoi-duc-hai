'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Divider from '../../components/divider';
import Image from 'next/image';
import { IProduct } from '../../interfaces/product';

type FeaturedProductsProps = {
  products: IProduct[];
};
const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { products } = props;

  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Divider title="Sản phẩm nổi bật" />

        <div className="overflow-hidden mt-6" ref={emblaRef}>
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative grow-0 shrink-0 basis-[100%] sm:basis-[50%] md:basis-[25%]"
              >
                {product.cover?.url && (
                  <Image
                    alt={product.name}
                    src={process.env.NEXT_PUBLIC_API_ROOT + product.cover?.url}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    width={1920}
                    height={1080}
                  />
                )}
                <div className="mt-4 flex justify-between">
                  <div>
                    <span className="subtitle text-gray-700">
                      <a href={`/san-pham/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
