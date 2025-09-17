import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { AlertTriangle, Mail } from "lucide-react";
import React from "react";

interface Section {
  title: string;
  content: React.ReactNode[];
}

export default function Disclaimer(): JSX.Element {
  const sections: Section[] = [
    {
      title: "General Information",
      content: [
        "The information provided on sudipbasnet.com.np is for general informational and educational purposes only.",
        "All content is provided in good faith, but we make no representation or warranty regarding the accuracy, reliability, or completeness of the information."
      ]
    },
    {
      title: "Professional Advice",
      content: [
        "The content on this website is not intended as professional advice (legal, financial, technical, or otherwise).",
        "Always seek professional guidance before acting on any information provided here."
      ]
    },
    {
      title: "External Links",
      content: [
        "Our website may contain links to third-party websites. We do not monitor, control, or guarantee the accuracy of any external site.",
        "Following these links is at your own risk."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "We are not liable for any loss or damage resulting from the use of this website or reliance on its content.",
        "This includes indirect, incidental, or consequential damages."
      ]
    },
    {
      title: "Affiliate & Advertising Disclosure",
      content: [
        "This site may display advertisements through Google AdSense or other networks.",
        "We may also include affiliate links, meaning we may earn a commission if you click or purchase through them."
      ]
    },
    {
      title: "Contact",
      content: [
        <>
          If you have questions about this disclaimer, please contact us at{" "}
          <a
            href="mailto:info@sudipbasnet.com.np"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            info@sudipbasnet.com.np
          </a>.
        </>
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: September 17, 2025
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Please read this disclaimer carefully before using our website.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6 mt-8">
          <div className="flex items-start">
            <AlertTriangle className="text-xl text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
                Important Notice
              </h3>
              <p className="text-red-800 dark:text-red-200">
                Use of this website is at your own risk. By continuing to use our site, you agree to this disclaimer.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/terms"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
