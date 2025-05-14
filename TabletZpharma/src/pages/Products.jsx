import React, { useMemo } from 'react';
import { useSearchParams, useLocation, Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
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
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const searchQuery = searchParams.get('search') || '';

  const categories = [
    { id: 'medicines', name: 'Medicines', products: Medicines },
    { id: 'ayurvedic', name: 'Ayurvedic', products: AyurvedicProducts },
    { id: 'baby', name: 'Baby Products', products: BabyProducts },
    { id: 'contraceptives', name: 'Contraceptives', products: Contraceptive },
    { id: 'health-devices', name: 'Health Devices', products: HealthDevices },
    { id: 'monsoon', name: 'Monsoon Essentials', products: MonsoonEssentials },
    { id: 'nutritional', name: 'Nutritional', products: Nutritional_Supplements },
    { id: 'protein', name: 'Protein', products: ProteinProducts },
    { id: 'women-care', name: 'Women Care', products: WomenCare }
  ];

  // Get current category or default to medicines
  const currentCategory = category || 'medicines';
  const currentCategoryData = categories.find(cat => cat.id === currentCategory) || categories[0];

  // Filter products based on search query and current category
  const filteredProducts = useMemo(() => {
    let products = currentCategoryData.products;

    if (searchQuery.trim()) {
      products = products.filter(product => 
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.product_usage.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  }, [searchQuery, currentCategoryData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-[2000px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${currentCategory === category.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Category Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {currentCategoryData.name}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products available
          </p>
        </div>

        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Search Results for: "{searchQuery}"
            </h2>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-600 text-lg bg-white rounded-xl shadow-sm p-10 max-w-md mx-auto">
              No products found matching your search.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="transform transition-all duration-300 hover:-translate-y-1">
                <ProductCard
                  image={product.product_image}
                  productName={product.product_name}
                  usage={product.product_usage}
                  mrp={product.product_mrp}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
