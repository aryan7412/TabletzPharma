import React, { useEffect, useState } from 'react';

const ProductCard = () => {
  const [drugInfoList, setDrugInfoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of products per page

  useEffect(() => {
    const fetchDrugInfo = async () => {
      const url = 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil'; // Modify to get multiple products
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '3996597abemsh1962ead528d9522p135bcajsn30ed67bee93a',
          'x-rapidapi-host': 'drug-info-and-price-history.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch drug info');
        }
        const result = await response.json();
        
        // Filter out products without essential data
        const validProducts = result.filter(product => 
          product.image_url && product.drug_name && product.mrp && product.price
        );

        setDrugInfoList(validProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDrugInfo();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = drugInfoList.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(drugInfoList.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((drugInfo, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <img className="w-full h-48 object-cover" src={drugInfo.image_url} alt={drugInfo.drug_name} />
            <div className="mt-4">
              <h2 className="text-xl font-bold">{drugInfo.drug_name}</h2>
              <p className="text-gray-700 text-base">{drugInfo.indication}</p>
              <p className="text-lg font-semibold">MRP: ${drugInfo.mrp}</p>
              <p className="text-lg font-semibold">Current Price: ${drugInfo.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 mx-2 bg-gray-300 rounded">
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(drugInfoList.length / itemsPerPage)} className="px-4 py-2 mx-2 bg-gray-300 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
