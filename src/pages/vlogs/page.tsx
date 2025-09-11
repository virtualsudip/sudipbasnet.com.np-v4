
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import VideoCard from '../../components/base/VideoCard';
import Button from '../../components/base/Button';

export default function Vlogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const categories = ['All', 'Travel', 'Tech', 'Lifestyle', 'Personal'];

  // ... existing code ...

  const vlogs: any[] = []; // Empty array - add your vlogs here

  const filteredVlogs = vlogs.filter(vlog => {
    const matchesCategory = selectedCategory === 'All' || vlog.category === selectedCategory;
    const matchesSearch = vlog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (vlog.description && vlog.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openVideoModal = (embedId: string) => {
    setSelectedVideo(embedId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">My Vlogs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join me on visual journeys through travel, tech, lifestyle, and personal growth. 
            Each video tells a story worth sharing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg"></i>
            <input
              type="text"
              placeholder="Search vlogs, topics, or categories..."
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
            {filteredVlogs.length} video{filteredVlogs.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVlogs.map((vlog, index) => (
            <div key={index} onClick={() => openVideoModal(vlog.embedId)}>
              <VideoCard {...vlog} />
            </div>
          ))}
        </div>

        {/* No Results / Empty State */}
        <div className="text-center py-16">
          <i className="ri-video-line text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {vlogs.length === 0 ? 'No vlogs yet' : 'No videos found'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {vlogs.length === 0 
              ? 'Vlogs will be added soon. Stay tuned for amazing video content!' 
              : 'Try adjusting your search or category filter'
            }
          </p>
          {filteredVlogs.length === 0 && vlogs.length > 0 && (
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

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer hover:scale-110"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video Player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
