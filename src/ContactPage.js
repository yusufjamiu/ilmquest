import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md">
        {/* Add your navigation bar here */}
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <ul className="list-disc pl-5">
          <li>Online Courses</li>
          <li>One-on-One Tutoring</li>
          <li>Group Study Sessions</li>
          <li>Resource Library</li>
        </ul>
        <Link to="/" className="mt-4 inline-block text-green-600 hover:text-green-700">Back to Home</Link>
      </main>
    </div>
  );
};

export default ContactPage;