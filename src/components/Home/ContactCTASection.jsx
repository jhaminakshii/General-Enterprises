import React from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";

const ContactCTASection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Need <span className="text-cyan-600"> Assistance?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our team is ready to assist you with product inquiries, support, and service requests. Connect with us instantly!
        </p>

        {/* CTA Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Call Now */}
          <a
            href="tel:+9779847130210"
            className="bg-white shadow hover:shadow-lg flex flex-col items-center justify-center p-6 rounded-xl transition hover:-translate-y-2 hover:bg-cyan-50"
          >
            <Phone className="w-8 h-8 text-cyan-600 mb-2" />
            <p className="font-semibold">Call Now</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+9779847130210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow hover:shadow-lg flex flex-col items-center justify-center p-6 rounded-xl transition hover:-translate-y-2 hover:bg-green-50"
          >
            <FaWhatsapp className="w-8 h-8 text-green-500 mb-2" />
            <p className="font-semibold">WhatsApp</p>
          </a>

          {/* Viber */}
          <a
            href="viber://chat?number=+9779847130210"
            className="bg-white shadow hover:shadow-lg flex flex-col items-center justify-center p-6 rounded-xl transition hover:-translate-y-2 hover:bg-purple-50"
          >
            <FaViber className="w-8 h-8 text-purple-600 mb-2" />
            <p className="font-semibold">Viber</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61578720955341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow hover:shadow-lg flex flex-col items-center justify-center p-6 rounded-xl transition hover:-translate-y-2 hover:bg-blue-50"
          >
            <FaFacebookF className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold">Facebook</p>
          </a>

          {/* Request Quote */}
          <a
            href="/contact"
            className="bg-white shadow hover:shadow-lg flex flex-col items-center justify-center p-6 rounded-xl transition hover:-translate-y-2 hover:bg-indigo-50"
          >
            <FileText className="w-8 h-8 text-indigo-600 mb-2" />
            <p className="font-semibold">Request Quote</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
