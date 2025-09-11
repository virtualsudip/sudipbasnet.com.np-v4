
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect personal information when you contact us or subscribe to updates, including your name and email address.",
        "We automatically collect usage data like IP address, browser type, and pages viewed to improve our website."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use your information to respond to inquiries, send updates, and improve our website experience."
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell or share your personal information with third parties without your consent.",
        "We may share information with trusted service providers who help operate our website."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to access, correct, or delete your personal information.",
        "You can opt out of communications at any time.",
        "This policy complies with GDPR and Australian Privacy Laws."
      ]
    },
    {
      title: "Cookies",
      content: [
        "We use essential cookies for website functionality and analytics cookies to understand visitor behavior.",
        "You can control cookie settings through your browser."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "For privacy questions, contact us at info@sudipbasnet.com.np",
        "We respond to all inquiries within 30 days."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
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
            We are committed to protecting your privacy. This policy explains how we collect, use, and protect 
            your information when you visit our website. By using our website, you agree to this policy.
          </p>
        </div>

        {/* Policy Sections */}
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

        {/* Quick Links */}
        <div className="text-center mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/terms" 
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-file-text-line mr-2"></i>
              Terms & Conditions
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
