
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm Sudip Basnet, a content creator passionate about sharing authentic stories through vlogs and blogs. 
            My mission is to inspire others to explore the world, embrace technology, and live authentically.
            <br /><br />
            My journey into content creation started with a simple desire to share the beauty I discovered 
            while traveling across Nepal and beyond. What began as casual documentation evolved into a 
            passion for storytelling that connects people across cultures and experiences.
            <br /><br />
            Through my vlogs, I take you along on adventures - from hidden mountain trails in the Himalayas 
            to bustling street food markets in Kathmandu. My blog dives deeper into the lessons learned, 
            the technology that enables modern nomadic living, and the personal growth that comes from 
            stepping outside your comfort zone.
            <br /><br />
            When I'm not creating content, you'll find me exploring new destinations, testing the latest 
            tech gear, or having meaningful conversations with locals wherever I travel. I believe that 
            authentic connections and genuine curiosity are the foundation of great content.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            I love connecting with fellow travelers, creators, and curious minds. 
            Whether you want to collaborate or just say hello, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                <i className="ri-mail-line mr-2"></i>
                Get In Touch
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://youtube.com/@sudipinspired', '_blank')}
            >
              <i className="ri-youtube-line mr-2"></i>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
