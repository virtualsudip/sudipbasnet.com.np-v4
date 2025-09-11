import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import AnimatedBackground from '../../components/base/AnimatedBackground';

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const openVideoModal = (embedId: string) => {
    setSelectedVideo(embedId);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setSelectedVideo('');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              <p className="text-2xl md:text-3xl mb-8 font-light">
                Sudip Basnet.
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
                Join me on my journey through vlogs and blogs as I share insights about travel, tech, lifestyle, and personal growth.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-12">
                {[
                  { name: 'Facebook', icon: 'ri-facebook-fill', color: 'bg-blue-600 hover:bg-blue-700', href: 'https://facebook.com/sudipinspired' },
                  { name: 'Instagram', icon: 'ri-instagram-fill', color: 'bg-pink-600 hover:bg-pink-700', href: 'https://instagram.com/sudipinspired' },
                  { name: 'TikTok', icon: 'ri-tiktok-fill', color: 'bg-gray-900 hover:bg-black', href: 'https://tiktok.com/@sudipinspired' },
                  { name: 'YouTube', icon: 'ri-youtube-fill', color: 'bg-red-600 hover:bg-red-700', href: 'https://youtube.com/@sudipinspired' },
                  { name: 'LinkedIn', icon: 'ri-linkedin-fill', color: 'bg-blue-700 hover:bg-blue-800', href: 'https://linkedin.com/in/sudipinspired' },
                  { name: 'X', icon: 'ri-twitter-x-fill', color: 'bg-gray-800 hover:bg-gray-900', href: 'https://x.com/sudipinspired' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white transition-all duration-300 cursor-pointer ${social.color} hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-white/20 backdrop-blur-sm`}
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-2xl hover:scale-110 transition-transform duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden animate-in fade-in zoom-in duration-300">
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
    </div>
  );
}