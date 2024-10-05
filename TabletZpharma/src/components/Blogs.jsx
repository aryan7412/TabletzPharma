import React, { useState, useEffect } from "react";


function Blogs() {
  const [articles, setArticles] = useState([]);

  const fetchBlogs = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?category=health&apiKey=405bf9d0b2804f56a21d8b19beb35d7e";
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const ArticleCard = ({ article }) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 hover:scale-105 duration-300">
      <img
        className="w-full h-48 object-cover"
        src={article.urlToImage}
        alt={article.title}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{article.title}</h3>
        <div className="text-gray-700 text-sm mb-2">
          <span>{article.source.name}</span> &bull;{" "}
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-700 text-base">{article.description}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
  
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center mb-4 mt-20">Recent Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ml-14 mb-10">
        {articles.length > 0 ? (
          articles
            .filter((article) => article.urlToImage)
            .slice(0, 3)
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
