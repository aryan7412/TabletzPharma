import React from 'react';
import ProductCard from '../components/ProductCard'; // Ensure you import the ProductCard component
import {
  AyurvedicProducts,
  BabyProducts,
  Contraceptive,
  HealthDevices,
  Medicines,
  MonsoonEssentials,
  Nutritional_Supplements,
  ProteinProducts,
  WomenCare
} from '../JSON/index';

const Products = () => {
  const allProducts = [
    ...AyurvedicProducts,
    ...BabyProducts,
    ...Contraceptive,
    ...HealthDevices,
    ...Medicines,
    ...MonsoonEssentials,
    ...Nutritional_Supplements,
    ...ProteinProducts,
    ...WomenCare
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {allProducts.length === 0 ? (
        <div className="text-gray-600 text-lg">No products available.</div>
      ) : (
        allProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.product_image}
            productName={product.product_name}
            usage={product.product_usage}
            mrp={product.product_mrp}
          />
        ))
      )}
    </div>
  );
};

export default Products;
