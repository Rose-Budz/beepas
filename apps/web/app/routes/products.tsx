import { products } from '@/content/products';
import { container, section, grid } from '@/styles/utils.css';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/utils/media';
import {
  productImage,
  productName,
  productDescription,
  productPrice,
  productCategory,
  outOfStock,
  pageTitle,
} from './products.css';

export default function Products() {
  // In SPA mode, we use data directly instead of loaders

  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Our Products</h1>
        <div className={grid}>
          {products.map((product) => (
            <Card key={product.id} elevation="raised">
              <span className={productCategory}>{product.category}</span>
              <img src={product.image} alt={product.name} className={productImage} />
              <h2 className={productName}>{product.name}</h2>
              <p className={productDescription}>{product.description}</p>
              <p className={productPrice}>{formatPrice(product.price)}</p>
              {product.inStock ? (
                <Button variant="primary">Add to Cart</Button>
              ) : (
                <p className={outOfStock}>Out of Stock</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
