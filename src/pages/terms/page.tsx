
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By using this website, you agree to these terms. If you don't agree, please don't use our website."
      ]
    },
    {
      title: "Use License",
      content: [
        "You may view and download content for personal, non-commercial use only.",
        "You may not modify, copy for commercial use, or remove copyright notices from our content."
      ]
    },
    {
      title: "Content Ownership",
      content: [
        "All content on this website is owned by Sudip Basnet and protected by copyright laws.",
        "You may not reproduce or distribute our content without written permission."
      ]
    },
    {
      title: "User Content",
      content: [
        "By submitting content (comments, messages), you grant us the right to use it on our website.",
        "We may remove any content we deem inappropriate."
      ]
    },
    {
      title: "Prohibited Uses",
      content: [
        "Don't use our website for unlawful purposes, to harass others, or to submit false information.",
        "Don't attempt to harm our website with viruses or malicious code."
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "Our website is provided 'as is' without warranties.",
        "We don't guarantee the accuracy or completeness of information on our website."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "We are not liable for any damages arising from your use of our website.",
        "Some jurisdictions may not allow these limitations."
      ]
    },
    {
      title: "Changes to Terms",
      content: [
        "We may update these terms at any time without notice.",
        "Continued use of our website means you accept any changes."
      ]
    },
    {
      title: "Contact",
      content: [
        "Questions about these terms? Contact us at info@sudipbasnet.com.np"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These terms govern your use of our website. Please read them carefully before using our service.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6 mt-8">
          <div className="flex items-start">
            <i className="ri-information-line text-xl text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Important Notice</h3>
              <p className="text-yellow-800 dark:text-yellow-200">
                These terms constitute a legally binding agreement. Please contact us if you have questions.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/privacy" 
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-shield-check-line mr-2"></i>
              Privacy Policy
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <i className="ri-mail-line mr-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
