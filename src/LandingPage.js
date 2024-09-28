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
            href="https://instagram.com/_ilmquest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          >
            <Instagram className="mr-2" /> Follow us on Instagram
          </a>
          <a
            href="https://twitter.com/_ilmquest"
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
            <img src="/assets/M2.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-52">
            <img src="/assets/M3.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/4 bg-green-800 rounded-lg flex items-center justify-center p-4 h-40">
            <p className="text-white text-sm">Revolutionizing the way we learn through games</p>
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-52">
            <img src="/assets/M7.png" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-1/5 bg-gray-200 rounded-lg h-64">
            <img src="/assets/M10.jpg" alt="Placeholder" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </main>
      
      {/* Section with large image and overlay text */}
<div className="mt-12 px-4 sm:px-6 lg:px-8">
  <div className="relative max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
    <img 
      src="/assets/colleague.jpg" 
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
                  src="/assets/M6.jpg"
                  alt="Explore"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Explore</h3>
              <p className="text-center text-gray-500 w-40">
                Adventures awaits, knowledge gauranteed
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center">
              <div className="w-44 h-56 bg-gray-200 rounded-lg sm:mt-4 transform rotate-6 -translate-y-2 overflow-hidden shadow-md">
                <img
                  src="/assets/M3.jpg"
                  alt="Learn"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-800">Learn</h3>
              <p className="text-center text-gray-500 w-40">
                Learn through play, dominate the quest
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center">
              <div className="w-44 h-56 bg-gray-200 rounded-lg transform rotate-6 -translate-y-2 overflow-hidden shadow-md">
                <img
                  src="/assets/M1.jpg"
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
      {/* New section: Where Learning Meets Fun */}
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Where Learning Meets Fun</h2>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Peer Group */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Peer Group</h3>
              <p className="text-gray-600">We'll create a package with full of attention and meaningful list of tools. We want to make sure that you'll receive your package like you receive your birthday gift.</p>
            </div>

            {/* Vast Library */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vast Library</h3>
              <p className="text-gray-600">You do not need to worry when you want to shape your knowledge. We will always unleash whatever your questions. Just click on the chat box and we will talk.</p>
            </div>

            {/* Growth Gamification */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Gamification</h3>
              <p className="text-gray-600">Believe it's such cool experience until we don't want to stop from learning to you. Our team will make sure you will through smooth and friendly process.</p>
            </div>
          </div>
        </div>
      </div>
      {/* New section: Upcoming Games */}
      <div className="py-12 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8">Upcoming Games</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { title: "QuizQuest", weeks: "8 weeks", image: "/assets/learn.jpg" },
        { title: "The Lughzu - Puzzles", weeks: "12 weeks", image: "design" },
        { title: "Critical Thinking Challenge", weeks: "24 weeks", image: "development" },
        { title: "Word Wizard", weeks: "14 weeks", image: "branding" }
      ].map((game, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md h-64">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={`/api/placeholder/400/300?text=${game.image}`}
              alt={game.title}
              className="object-cover w-full h-full filter blur-sm"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold">{game.title}</h3>
            <p className="text-white text-sm">{game.weeks}</p>
          </div>
          <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* New section: Kids' Zone */}
<div className="py-12 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background image */}
          <img
            src="/assets/kids1.jpg"
            alt="Kids playing"
            className="w-full h-auto object-cover rounded-lg"
            style={{ maxHeight: '500px' }}
          />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-3xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left md:pr-8">
                  <h2 className="text-3xl font-bold mb-4">Kids' Zone: Learn & Play</h2>
                  <p className="mb-6">
                    Our kids' zone is a safe and engaging section designed specially for children aged 6-12. Our goal here is to make learning fun, fostering a love for knowledge and exploration.
                  </p>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                    Explore Kids' Zone
                  </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <img
                    src="/assets/kids.jpeg"
                    alt="Kids engaging in activities"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 md:mt-0"></div>
    
    {/* New FAQ Section */}
    <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mt-6 sm:mt-8 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
         
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">What is IlmQuest?</summary>
              <p className="mt-2"> Ilmquest is an online gaming platform that offers a variety of knowledge-based games, quizzes, and puzzles to help users learn, grow, and have fun.</p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">How do I play games on Ilmquest?</summary>
              <p className="mt-2">Simply create an account, browse our game library, and start playing. You can choose from various categories, difficulty levels, and game formats.</p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">What types of games will be or are available on Ilmquest?</summary>
              <p className="mt-2">Ilmquest offers a range of games, including quizzes, trivia, word games, puzzles, and strategy games, covering various subjects like history, science, literature, and more.</p>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">Can I compete with other players?</summary>
              <p className="mt-2">Yes! Ilmquest allows you to compete with other players in real-time, track your rankings, and earn rewards.</p>
            </details>

            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">Is Ilmquest free to play?</summary>
              <p className="mt-2">Yes, Ilmquest offers free and paid membership options. Free members can access a limited selection of games, while premium members enjoy full access, exclusive content, and special perks.</p>
            </details>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-gradient-to-b from-teal-500 to-teal-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Adjust flex direction for smaller screens */}
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* SVG moves to top for small screens */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
      <svg className="w-64 h-64 text-teal-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
      </div>

      {/* Text content */}
      <div className="md:w-1/2 order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="mb-6">
          Be part of a vibrant community that's redefining the future of learning. Sign up now and start your IlmQuest journey today!
        </p>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md text-gray-900 flex-grow"
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300">
            Join Us
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer className="bg-teal-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">IlmQuest</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">COMPANY</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Main Features</a></li>
                  <li><a href="#" className="hover:underline">Pricing</a></li>
                  <li><a href="#" className="hover:underline">Demo</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">SOCIAL</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Instagram</a></li>
                  <li><a href="https://x.com/_ilmquest" className="hover:underline">Twitter</a></li>
                  <li><a href="#" className="hover:underline">LinkedIn</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-orange-500">ABOUT</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; Copyright 2024 IlmQuest</p>
          </div>
        </div>
      </footer>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} onSubmit={handleFormSubmit} />}
      {showOnboarding && <OnboardingPopup onClose={() => setShowOnboarding(false)} />}
    </div>
  );
};

export default LandingPage;