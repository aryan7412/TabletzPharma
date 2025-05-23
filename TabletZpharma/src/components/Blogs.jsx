import React, { useState, useEffect } from "react";

function Blogs() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Debug log to check if API key exists
      console.log('API Key exists:', !!import.meta.env.BLOG_API_KEY);
      console.log('API Key value:', import.meta.env.BLOG_API_KEY);
      
      const apiKey = import.meta.env.BLOG_API_KEY;
      if (!apiKey) {
        throw new Error('Blog API key is not configured');
      }

      let url = `https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`;
      console.log('Fetching from URL:', url); // Debug log
      
      let data = await fetch(url);
      console.log('Response status:', data.status); // Debug log
      
      if (!data.ok) {
        throw new Error(`Failed to fetch news: ${data.status} ${data.statusText}`);
      }
      
      let parsedData = await data.json();
      console.log('API Response:', parsedData); // Debug log
      setArticles(parsedData.articles || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const ArticleCard = ({ article }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={article.urlToImage}
          alt={article.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-gray-800 line-clamp-2">{article.title}</h3>
        <div className="text-gray-600 text-sm mb-3 flex items-center">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {article.source.name}
          </span>
          <span className="mx-2">•</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600 text-base mb-4 line-clamp-3">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Health News</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest updates and insights from the healthcare world
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {loading ? (
          <div className="col-span-3 text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading latest articles...</p>
          </div>
        ) : error ? (
          <div className="col-span-3 text-center py-12">
            <div className="text-red-600 mb-4">Error loading articles</div>
            <p className="text-gray-600">{error}</p>
          </div>
        ) : articles.length > 0 ? (
          articles
            .filter((article) => article.urlToImage)
            .slice(0, 3)
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-600">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
