import styles from '@/styles/PropertyView.module.css';

interface PropertyImageView {
  images: string[];
};

const PropertyImageView = ({ images }: PropertyImageView) => {
  return (
    <div className={styles.imageContainer}>
      {images.map((image) => (
        <img src={image} />
      ))}
    </div>
  );
};

export default PropertyImageView;