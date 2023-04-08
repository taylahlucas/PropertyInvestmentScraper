import styles from '@/styles/PropertyView.module.css';

interface PropertyImageView {
  images: string[];
};

const PropertyImageView = ({ images }: PropertyImageView) => {
  return (
    <div className={styles.imageContainer}>
      {images.map((image, index) => (
        <img key={index} src={image} />
      ))}
    </div>
  );
};

export default PropertyImageView;