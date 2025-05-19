
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-purple-900">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <FAQSection />
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-purple-900">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Couldn't find the answer you're looking for? Reach out to the organizing team directly:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Email</h3>
                <a href="mailto:hackathon@wonderbotz.com" className="text-purple-700 hover:underline">
                  hackathon@wonderbotz.com
                </a>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Slack Channel</h3>
                <p className="text-gray-700">#vibe-a-thon-hackathon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
