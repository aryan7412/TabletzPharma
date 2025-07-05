import React, { useMemo, useState } from 'react';
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
  const [page, setPage] = useState(1);

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

  // Responsive page size
  const getPageSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 20; // mobile
      if (window.innerWidth < 1024) return 25; // tablet
    }
    return 30; // desktop
  };

  const [pageSize, setPageSize] = useState(getPageSize());

  React.useEffect(() => {
    const handleResize = () => setPageSize(getPageSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  React.useEffect(() => {
    setPage(1); // Reset to first page on filter/category change
  }, [searchQuery, currentCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
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
          <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:-translate-y-1 mx-auto w-full max-w-xs"
                data-aos="fade-up"
              >
                <ProductCard
                  image={product.product_image}
                  productName={product.product_name}
                  usage={product.product_usage}
                  mrp={product.product_mrp}
                />
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center mt-10 gap-2 sm:gap-3">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-50 text-base sm:text-sm"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-2 rounded text-base sm:text-sm font-semibold transition-all duration-200 ${page === i + 1 ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
                  style={{ minWidth: '2.5rem' }}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 disabled:opacity-50 text-base sm:text-sm"
              >
                Next
              </button>
            </div>
          )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
