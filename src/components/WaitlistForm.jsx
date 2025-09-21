import React, { useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  //   addDoc, I'll use setDoc rather to allow me use emails as DocID & block duplicates.
  setDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); //null | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log to test submission
    console.log('Form submitted with:', email); // debug

    // Email Validation block
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    // __________________________________________

    try {
      // Use lowercase email as the document ID
      const emailNormalized = email.toLowerCase();

      //   CREATE NEW DOC (FIRST TIME ONLY)

      await setDoc(doc(db, 'waitlist', emailNormalized), {
        email: emailNormalized,
        timestamp: serverTimestamp(),
      });

      console.log('Added to Firestore successfully'); // debug

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      setStatus('error');
    }
  };

  return (
    // 4.Call to Action - The Invitation
    <section id="get-started" className="bg-gray-50 py-20 scroll-mt-20">
      {/* This section holds the CTA content */}
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-gray-900 text-2xl mb-2">
          Join the Waitlist
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Be among the first to walk the path. We'll let you know when MpatiQ
          opens.
        </p>
        {/* Let's now add in the form block */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Input field */}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'success'}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={status === 'success'}
            className="px-6 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {status === 'success' ? 'Submitted' : 'Notify me'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-600 text-sm mt-4">
            You're on the list. We'll be in touch.
          </p>
        )}
        {/* Error Block */}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
