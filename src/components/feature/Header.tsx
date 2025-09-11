import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Vlogs', href: '/vlogs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SB</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Sudip Basnet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-xl`}></i>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleDarkMode();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 cursor-pointer"
            >
              <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} mr-2`}></i>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
