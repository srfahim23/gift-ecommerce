import React from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
      <div className="relative pb-[100%]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;