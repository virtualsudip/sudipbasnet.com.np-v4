
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: 'ri-facebook-fill', href: 'https://facebook.com/sudipinspired', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: 'ri-instagram-fill', href: 'https://instagram.com/sudipinspired', color: 'hover:text-pink-600' },
    { name: 'TikTok', icon: 'ri-tiktok-fill', href: 'https://tiktok.com/@sudipinspired', color: 'hover:text-black' },
    { name: 'YouTube', icon: 'ri-youtube-fill', href: 'https://youtube.com/@sudipinspired', color: 'hover:text-red-600' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: 'https://linkedin.com/in/sudipinspired', color: 'hover:text-blue-600' },
    { name: 'X', icon: 'ri-twitter-x-fill', href: 'https://x.com/sudipinspired', color: 'hover:text-gray-800' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vlogs', href: '/vlogs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <span className="text-xl font-bold">
                Sudip Basnet
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join me on my journey through vlogs and blogs as I share insights about travel, tech, lifestyle, and personal growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg text-gray-300 transition-colors cursor-pointer ${social.color}`}
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sudip Basnet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}