import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Message from Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:info@sudipbasnet.com.np?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      description: 'For collaboration inquiries',
      value: 'info@sudipbasnet.com.np',
      action: 'mailto:info@sudipbasnet.com.np'
    },
    {
      icon: 'ri-youtube-line',
      title: 'YouTube',
      description: 'Subscribe for vlogs & inspiration',
      value: '@sudipinspired',
      action: 'https://youtube.com/@sudipinspired'
    },
    {
      icon: 'ri-instagram-line',
      title: 'Instagram',
      description: 'Behind the scenes content',
      value: '@sudipinspired',
      action: 'https://instagram.com/sudipinspired'
    },
    {
      icon: 'ri-linkedin-line',
      title: 'LinkedIn',
      description: 'Professional networking',
      value: 'sudipinspired',
      action: 'https://linkedin.com/in/sudipinspired'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're interested in collaborations, have questions about my content, 
            or just want to connect, I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your inquiry, question, or just say hello! (Max 500 characters)"
                ></textarea>
                <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:scale-105"
              >
                <i className="ri-send-plane-line mr-2"></i>
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other Ways to Connect</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <i className={`${method.icon} text-xl text-blue-600 dark:text-blue-400`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{method.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
