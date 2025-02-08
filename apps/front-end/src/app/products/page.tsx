import Divider from '../../components/divider';
import { Pagination } from '@heroui/react';
import ProductGrid from '../../sections/products/product-grid';
import { IProduct } from '../../interfaces/product';

const products: IProduct[] = [];

export default function Index() {
  return (
    <main className="mt-8 flex flex-col items-center gap-4">
      <Divider title="Tất cả sản phẩm" />
      <ProductGrid products={products} />
      <Pagination showShadow initialPage={1} total={10} />
    </main>
  );
}
