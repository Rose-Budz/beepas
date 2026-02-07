import { products } from '@/content/products';
import { container, section, grid, gridTwo, pageTitle, sectionCard } from '@/styles/utils.css';
import { ImageDialog } from '@/components/ui/ImageDialog';
import { GalleryCard, CardContent, CardTitle, CardDescription } from '@/components/ui/GalleryCard';
import { cardImage } from '@/components/ui/GalleryCard.css';

export default function Products() {
  return (
    <div className={section}>
      <div className={container}>
        <div className={sectionCard}>
          <h1 className={pageTitle}>Our Products</h1>
          <div className={products.length <= 4 ? gridTwo : grid}>
            {products.map((product) => (
              <GalleryCard key={product.id}>
                <ImageDialog src={product.image} alt={product.name} triggerClassName={cardImage} />
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </GalleryCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
