import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pb-[100%]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <button className="bg-[#e31837] text-white px-4 py-2 rounded-full text-sm hover:bg-[#c41830] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;