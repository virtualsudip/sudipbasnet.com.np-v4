import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import BlogCard from '../../components/base/BlogCard';
import Button from '../../components/base/Button';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Tech', 'Travel', 'Lifestyle', 'Personal'];

  // ... existing code ...

  const blogPosts: any[] = []; // Empty array - add your blog posts here

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deep dives into technology, travel stories, lifestyle tips, and personal reflections. 
            Real insights from real experiences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg"></i>
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm shadow-sm hover:shadow-md"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* No Results / Empty State */}
        <div className="text-center py-16">
          <i className="ri-file-text-line text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {blogPosts.length === 0 ? 'No blog posts yet' : 'No articles found'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {blogPosts.length === 0 
              ? 'Blog posts will be added soon. Stay tuned for amazing content!' 
              : 'Try adjusting your search or category filter'
            }
          </p>
          {filteredPosts.length === 0 && blogPosts.length > 0 && (
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              variant="outline"
              className="hover:scale-105 transition-transform duration-300"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
