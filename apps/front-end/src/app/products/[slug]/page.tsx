import Divider from 'apps/front-end/src/components/divider';
import { Divider as HeroDivider } from '@heroui/react';
import { IProduct } from 'apps/front-end/src/interfaces/product';
import Image from 'next/image';

import qs from 'qs';
import { Metadata } from 'next';

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const queries = qs.stringify({
    populate: {
      properties: {
        populate: '*',
      },
      cover: {
        populate: '*',
        fields: ['id', 'url'],
      },
      thumbnails: {
        populate: '*',
        fields: ['id', 'url'],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  const res = await fetch(
    `${process.env.API_ROOT}/v1/products?${queries}`
  ).then((res) => res.json());
  const { data } = res;
  const product: IProduct = data[0];
  return {
    title: product.name,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const queries = qs.stringify({
    populate: {
      properties: {
        populate: '*',
      },
      cover: {
        populate: '*',
        fields: ['id', 'url'],
      },
      thumbnails: {
        populate: '*',
        fields: ['id', 'url'],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  const res = await fetch(
    `${process.env.API_ROOT}/v1/products?${queries}`
  ).then((res) => res.json());
  const { data } = res;
  const product: IProduct = data[0];

  return (
    <main>
      <section className="p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          <div className="flex flex-col gap-2">
            <Image
              src={process.env.API_ROOT + product.cover?.url}
              alt=""
              width={1920}
              height={1080}
            />

            <div className="flex items-center gap-2">
              <Image
                src={process.env.API_ROOT + product.cover?.url}
                alt=""
                width={80}
                height={80}
              />
              {product.thumbnails?.map((thumbnail) => {
                return (
                  <Image
                    key={thumbnail.id}
                    src={process.env.API_ROOT + thumbnail?.url}
                    alt=""
                    width={80}
                    height={80}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h6>{product.name}</h6>
            {product.desc && (
              <p className="text-lg text-neutral-700">{product.desc}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Divider title="Thông số kỹ thuật" />

          {product.properties?.map((property, index) => {
            return (
              <div key={property.id} className="flex flex-col gap-1">
                <div className="grid grid-cols-12 gap-x-4">
                  <strong className="col-span-4 text-sm text-neutral-700 ">
                    {property.key}
                  </strong>
                  <article className="col-span-8 prose ">
                    {property.value}
                  </article>
                </div>
                {index !== product.properties.length - 1 && <HeroDivider />}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
