import React from "react";

type Product = {
  name: string;
  price: number;
  images: string[]; // URLs to images
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <div className="product-images">
      {product.images.map((img, idx) => (
        <img key={idx} src={img} alt={`${product.name} image ${idx + 1}`} />
      ))}
    </div>
    <div className="product-details">
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

export default ProductCard;
