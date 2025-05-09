import { useState } from 'react';
import case1 from "../assets/images/case1.png";
import case2 from "../assets/images/case2.png";
import case3 from "../assets/images/case3.png";

// Sample data for blog articles
const articles = [
  {
    id: 1,
    title: "Mobile Marketing is the Future of E-Commerce, Real-World Study Finds",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case3
  },
  {
    id: 2,
    title: "How Can Influencers Show Glamour and Class Selling on Instagram",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case2
  },
  {
    id: 3,
    title: "Apple Electronics Climb the List of the Top Gadgets in Forbes Magazine",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case1
  },
  {
    id: 4,
    title: "Social Networks Advertising is Important the Future Of Marketing",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case3
  },
  {
    id: 5,
    title: "Television is in Steep Decline Compared to Social Network Marketing",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case2
  },
  {
    id: 6,
    title: "New Small Camera Review: Pricing is Not Always the Only Criteria",
    excerpt: "I understand how that could positively effect your body, but alchemizing means turning elements to gold basically through magic. That lead me to research...",
    date: "December 1, 2024",
    image: case1
  }
];

// Get the popular articles (could be determined by view count, etc)
const popularArticles = [...articles].sort((a, b) => a.id - b.id);

const ArticleCard = ({ article}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-6 hover:text-blue-400 ">
        <div className="w-full md:w-1/3">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-64 object-cover rounded" 
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className={`text-3xl font-bold mb-4`}>
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4">{article.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

const PopularArticle = ({ article }) => {
  return (
    <div className="mb-8 border-b border-gray-200 pb-6 hover:text-blue-400">
      <h3 className="text-lg font-bold text-navy-800 mb-2">
        {article.title}
      </h3>
      <p className="text-gray-500 text-sm">{article.date}</p>
    </div>
  );
};

export default function BlogLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {articles.slice(0, 3).map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article}
                // highlightTitle={index === 1 || index === 2} 
              />
            ))}
            
            {/* Pagination */}
            <div className="flex mt-8">
              <button 
                className={`h-10 w-10 flex items-center justify-center rounded ${currentPage === 1 ? 'bg-blue-400 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              <button 
                className={`h-10 w-10 flex items-center justify-center rounded ml-2 ${currentPage === 2 ? 'bg-blue-400 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => handlePageChange(2)}
              >
                2
              </button>
              <button 
                className="h-10 w-10 flex items-center justify-center rounded ml-2 bg-white text-gray-700"
                onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
              >
                &gt;
              </button>
              <div className="ml-auto text-gray-500 text-sm mt-3">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">Popular articles</h2>
              {popularArticles.map(article => (
                <PopularArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}