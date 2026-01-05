import React from 'react'

const ContactUs = () => {
  return (
<>

    <div className="min-h-screen bg-white">
      
      {/* HEADER */}
    <div className="bg-[url('/tmtl-eicher-silent-genset-1.webp')] bg-top bg-no-repeat w-full min-h-[80vh] m-0">

      {/* <div className="text-center py-12 bg-cyan-600 text-white shadow-md"> */}
        {/* <img src="/tmtl-eicher-silent-genset-1.webp" alt="contact" /> */}
        <div className='py-50 px-10'>
            <h1 className="text-4xl md:text-5xl font-bold text-right text-cyan-500">Contact Us</h1>
                <p className="text-lg mt-2 text-right text-cyan-400 opacity-90">
                 We’re here to assist you. Reach out anytime.
             </p>
        </div>
       
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        
        {/* LEFT — FORM */}
        <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-cyan-600 focus:ring-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-cyan-600 focus:ring-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-cyan-600 focus:ring-cyan-600"
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

        {/* RIGHT — INDIA STYLE CONTACT + MAP */}
        <div className="space-y-8">
          
          {/* CONTACT DETAILS CARD */}
          <div className="bg-cyan-600 text-white shadow-lg p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Contact Details</h2>

            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  Durbar Marg,<br />
                  Opposite Annapurna Hotel,<br />
                  Kathmandu, Nepal
                </p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+977-9847130210</p>
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

          {/* GOOGLE MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.113389498455!2d85.31895467481356!3d27.71201817616961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f1e1819b5%3A0xd815b79cd4e341fa!2sHotel%20Annapurna!5e0!3m2!1sen!2snp!4v1708938400000"
            ></iframe>
          </div>

        </div>
      </div>
    </div>



</>
  )
}

export default ContactUs