import { IProduct } from '../../interfaces/product';
import ProductItem from './product-item';

type ProductGridProps = {
  products: IProduct[];
};

const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
