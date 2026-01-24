import { products } from '@/content/products';
import { container, section, grid } from '@/styles/utils.css';
import { Card } from '@/components/ui/Card';
import { ImageDialog } from '@/components/ui/ImageDialog';
import { productImage, productName, productDescription, pageTitle } from './products.css';

export default function Products() {
  // In SPA mode, we use data directly instead of loaders

  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Our Products</h1>
        <div className={grid}>
          {products.map((product) => (
            <Card key={product.id} elevation="raised">
              <ImageDialog src={product.image} alt={product.name}>
                <img src={product.image} alt={product.name} className={productImage} />
              </ImageDialog>
              <h2 className={productName}>{product.name}</h2>
              <p className={productDescription}>{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
