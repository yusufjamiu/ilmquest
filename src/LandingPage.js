import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Instagram, Twitter } from 'lucide-react';

const PopupForm = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, whatsapp, email });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Join IlmQuest</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const OnboardingPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to IlmQuest!</h2>
        <p className="mb-4">Connect with us on social media:</p>
        <div className="flex flex-col space-y-4">
          <a
            href="https://instagram.com/ilmquest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          >
            <Instagram className="mr-2" /> Follow us on Instagram
          </a>
          <a
            href="https://twitter.com/ilmquest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
          >
            <Twitter className="mr-2" /> Follow us on Twitter
          </a>
          <a
            href="https://whatsapp.com/channel/ilmquest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <ArrowUpRight className="mr-2" /> Join our WhatsApp Channel
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowPopup(false);
    setShowOnboarding(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-green-800 font-bold text-2xl">IlmQuest</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {['Services', 'About', 'Pricing', 'Events', 'Membership', 'FAQ', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <button onClick={handleButtonClick} className="bg-green-100 text-green-800 group flex items-center px-4 py-2 text-sm font-medium rounded-md">
                Start my Journey
                <ArrowUpRight className="ml-2 h-4 w-4 text-white bg-green-800 rounded-sm" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-thin mb-4">
          Unlocking an{' '}
          <span className="font-bold text-green-800">Islamic world</span>
          <br />
          of learning
        </h1>
        <p className="text-base mt-4 mb-12">
          Welcome to IlmQuest, the ultimate online destination for curious minds
        </p>
        <div className="flex justify-center mb-12">
          <button onClick={handleButtonClick} className="px-5 py-2 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-green-700 to-green-900 hover:from-green-500 hover:to-green-700 transition duration-300 shadow-md flex items-center">
            Take the First Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="flex justify-between items-end gap-4">
          <div className="w-1/5 bg-gray-200 rounded-lg h-64">
            <img src="/assets/muslimman.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-52">
            <img src="/assets/kidboy.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/4 bg-green-800 rounded-lg flex items-center justify-center p-4 h-40">
            <p className="text-white text-sm">Discover the world of Islamic knowledge</p>
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-52">
            <img src="/assets/girlkid.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-64">
            <img src="/assets/hijablady.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </main>
      
      {/* Section with large image and overlay text */}
<div className="mt-12 px-4 sm:px-6 lg:px-8">
  <div className="relative max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
    <img 
      src="/assets/M2.jpg" 
      alt="Large banner" 
      className="w-full h-auto object-cover rounded-lg"
      style={{ maxHeight: '400px' }}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-4 sm:p-8 sm:pt-12">
      <span className="bg-green-300 text-green-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
        Join the movement!
      </span>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-8 max-w-lg">
        Discover a smarter way to learn
      </h2>
      <button 
        onClick={handleButtonClick} 
        className="bg-white text-black px-3 py-2 sm:px-6 sm:py-3 rounded-full font-semibold flex items-center text-sm sm:text-base"
      >
        Take the first step
        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  </div>
</div>


      {/* Updated Section with Columns */}
      <div className="py-12 bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex layout for columns */}
          <div className="flex flex-col md:flex-row justify-center space-y-0 md:space-y-10 md:space-x-24">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <div className="w-44 h-56 bg-gray-200 rounded-lg transform rotate-6 -translate-y-2 overflow-hidden shadow-md">
                <img
                  src="/assets/explore.jpg"
                  alt="Explore"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Explore</h3>
              <p className="text-center text-gray-500 w-40">
                Embark on a quest for knowledge, tailored to your level and interests.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center">
              <div className="w-44 h-56 bg-gray-200 rounded-lg transform rotate-6 -translate-y-2 overflow-hidden shadow-md">
                <img
                  src="/assets/learn.jpg"
                  alt="Learn"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Learn</h3>
              <p className="text-center text-gray-500 w-40">
                Engage with a community of learners, share ideas, and grow together.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center">
              <div className="w-44 h-56 bg-gray-200 rounded-lg transform rotate-6 -translate-y-2 overflow-hidden shadow-md">
                <img
                  src="/assets/grow.jpg"
                  alt="Grow"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Grow</h3>
              <p className="text-center text-gray-500 w-40">
                Unlock rewards, badges, and recognition for your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} onSubmit={handleFormSubmit} />}
      {showOnboarding && <OnboardingPopup onClose={() => setShowOnboarding(false)} />}
    </div>
  );
};

export default LandingPage;