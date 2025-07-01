import React from 'react';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt
} from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mdkzbpbq");

  return (
    <>
      <section className="bg-[#1E232B] text-white py-20 px-6 min-h-screen">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
            Let’s Connect
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Whether it's a collaboration, query, or just a friendly hello — feel free to reach out.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info Column */}
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:yadavlove2370@gmail.com" className="hover:underline">yadavlove2370@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 7582946920</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-blue-400" />
                <a href="https://www.linkedin.com/in/love-yadav-6417042b7" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/love-yadav
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaGithub className="text-blue-400" />
                <a href="https://github.com/love12yadav" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  github.com/love12yadav
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:w-1/2">
            {state.succeeded ? (
              <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                <p className="text-lg">Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#2A2F38] hover:bg-blue-500 hover:text-white border border-blue-400 p-8 rounded-xl shadow-md space-y-5 transition-all"
              >
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded bg-[#1E232B] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded bg-[#1E232B] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 rounded bg-[#1E232B] text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
