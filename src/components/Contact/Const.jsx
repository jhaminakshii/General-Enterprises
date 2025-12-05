import React from 'react'

const Const = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT: Contact Info */}
        <div className="bg-cyan-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-4 text-lg">
            <div>
              <p className="font-semibold">Address:</p>
              <p>General Enterprises, Kathmandu, Nepal</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+977-9800000000</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>info@generalenterprises.com</p>
            </div>
            <div>
              <p className="font-semibold">Office Hours:</p>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-cyan-600 mb-6">Contact Us</h2>

          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 transition text-white font-semibold py-3 rounded-lg text-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Const