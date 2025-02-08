import { Card, CardBody } from '@heroui/react';
import Image from 'next/image';
import { IProduct } from '../../interfaces/product';
import Link from 'next/link';

type ProductItemProps = {
  product: IProduct;
};

const ProductItem = (props: ProductItemProps) => {
  const { product } = props;
  return (
    <Card key={product.id} isPressable as={Link} href={product.slug}>
      <CardBody>
        <Image
          alt={product.name}
          src={product.thumbnail}
          width={1920}
          height={1080}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
